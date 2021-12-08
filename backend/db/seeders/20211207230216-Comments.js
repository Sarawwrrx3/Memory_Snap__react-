'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        "Comments",
        [
            {
                id: 1,
                userID: 1,
                imageID: 1,
                comment: "Hey, that's a really cool picture!!",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                userID: 2,
                imageID: 2,
                comment: "Love the gloominess and clear this is.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
