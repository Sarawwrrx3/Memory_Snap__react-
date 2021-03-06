'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userID: DataTypes.INTEGER,
    photoID: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userID" });
    Comment.belongsTo(models.Photo, { foreignKey: "photoID" });
  };
  return Comment;
};