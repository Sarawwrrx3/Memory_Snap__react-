"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4, 30],
                    isNotEmail(value) {
                        if (Validator.isEmail(value)) {
                            throw new Error("Cannot be an email.");
                        }
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 256],
                },
            },
            hashedPassword: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60],
                },
            },
        },
        {
            defaultScope: {
                attributes: {
                    exclude: [
                        "hashedPassword",
                        "email",
                        "createdAt",
                        "updatedAt",
                    ],
                },
            },
            scopes: {
                currentUser: {
                    attributes: { exclude: ["hashedPassword"] },
                },
                loginUser: {
                    attributes: {},
                },
            },
        }
    );

    User.associate = function (models) {
        User.hasMany(models.Album, { foreignKey: "userID" });
        User.hasMany(models.Comment, { foreignKey: "userID" });
        User.hasMany(models.Photo, { foreignKey: "userID" });
        // associations can be defined here
    };

    // This method will return an object with only the User instance information that is safe to save to a JWT.
    User.prototype.toSafeObject = function () {
        // remember, this cannot be an arrow function
        const { id, username, email } = this; // context will be the User instance
        return { id, username, email };
    };

    //  accept a password string and return true if there is a match with the User
    // instance's hashedPassword, otherwise it will return false.
    User.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    User.getCurrentUserById = async function (id) {
        return await User.scope("currentUser").findByPk(id);
    };

    //If a user is found, then validate the password by passing it into the instance's
    // .validatePassword method. If the password is valid, then return the user by using the currentUser scope.

    User.login = async function ({ credential, password }) {
        const { Op } = require("sequelize");
        const user = await User.scope("loginUser").findOne({
            where: {
                [Op.or]: {
                    username: credential,
                    email: credential,
                },
            },
        });
        if (user && user.validatePassword(password)) {
            return await User.scope("currentUser").findByPk(user.id);
        }
    };

    User.signup = async function ({ username, email, password }) {
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({
            username,
            email,
            hashedPassword,
        });
        if (user) {
            return await User.scope("currentUser").findByPk(user.id);
        } else {
            return false;
        }
    };

    return User;
};
