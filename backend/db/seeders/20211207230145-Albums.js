'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        "Albums",
        [
            {
                id: 1,
                userID: 1,
                title: "Mountains",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                userID: 2,
                title: "Oceans / Lakes / Beach",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                userID: 3,
                title: "City / Streets",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                userID: 4,
                title: "Foods",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 5,
                userID: 5,
                title: "Countries",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 6,
                userID: 1,
                title: "Sunset",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 7,
                userID: 2,
                title: "Flowers",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
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
