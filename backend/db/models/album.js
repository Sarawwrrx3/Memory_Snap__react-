'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
      "Album",
      {
          userID: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
          title: {
              allowNull: false,
              type: DataTypes.STRING,
          },
      },
      {}
  );
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: "userID" });
    Album.hasMany(models.Photo, { foreignKey: "albumID" });
  };
  return Album;
};