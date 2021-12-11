'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        "Albums",
        [
            {
                userID: 1,
                title: "Mountains",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userID: 2,
                title: "Oceans / Lakes / Beach",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userID: 3,
                title: "City / Streets",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userID: 4,
                title: "Foods",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                userID: 5,
                title: "Countries",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                userID: 1,
                title: "Sunset",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                userID: 2,
                title: "Flowers",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userID: 3,
                title: "LifeStyle",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {}
    );
    },
  

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("Albums", null, {});
  }
};
