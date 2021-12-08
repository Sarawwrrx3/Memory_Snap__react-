"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Comments",
            [
                {
                    userID: 1,
                    photoID: 1,
                    comment: "Hey, that's a really cool picture!!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    photoID: 2,
                    comment: "Super sick shot :)",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    photoID: 3,
                    comment: "Just magical!!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    photoID: 4,
                    comment: "It's revolutionary not just fab!!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    photoID: 5,
                    comment: "Such appealing.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    photoID: 6,
                    comment: "This is sleek work.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    photoID: 7,
                    comment: "Mission accomplished. It's appealing!!!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    photoID: 8,
                    comment: "Let me take a nap... great concept, anyway.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    photoID: 9,
                    comment: "Cool. So slick.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    photoID: 10,
                    comment: "Sleek work you have here.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    photoID: 11,
                    comment: "This is excellent and graceful :)!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    photoID: 12,
                    comment: "Simple shot!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    photoID: 13,
                    comment: "Vastly thought out! Wow love it!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    photoID: 14,
                    comment: "I think I'm crying. It's that clean.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    photoID: 15,
                    comment: "Background, shape, shot, atmosphere – strong :)",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    photoID: 16,
                    comment: "So amazing and incredible dude",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    photoID: 17,
                    comment: "Really thought out! Yup.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    photoID: 18,
                    comment:
                        "This atmosphere has navigated right into my heart.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    photoID: 19,
                    comment: "This is sick work m8",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    photoID: 20,
                    comment: "Alluring. So strong.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    photoID: 21,
                    comment: "How do you make this? Photoshop?",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    photoID: 22,
                    comment: "I'd love to see a video of how it works.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    photoID: 23,
                    comment: "Incredibly alluring, friend.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    photoID: 24,
                    comment: "Everything feels nice.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    photoID: 25,
                    comment: "Incredibly exquisite shot m8",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Comments", null, {});
    },
};
