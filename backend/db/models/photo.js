"use strict";
module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define(
        "Photo",
        {
            userID: DataTypes.INTEGER,
            albumID: DataTypes.INTEGER,
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            imageUrl: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {}
    );
    Photo.associate = function (models) {
        // associations can be defined here
        Photo.belongsTo(models.Album, { foreignKey: "albumID" });
        Photo.belongsTo(models.User, { foreignKey: "userID" });
        Photo.hasMany(models.Comment, { foreignKey: "photoID" });
    };
    return Photo;
};
