'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Photos", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        userID: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: "Users",
                key: "id",
            },
        },
        albumID: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: "Albums",
                key: "id",
            },
        },
        title: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        description: {
            type: Sequelize.TEXT,
        },

        imageUrl: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photos');
  }
};