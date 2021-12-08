"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Photos",
            [
                {
                    userID: 1,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636688080/sample.jpg",
                    content: "Flower",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972148/Memory-snap%20images/photo-1593642532842-98d0fd5ebc1a_qv4tuf.jpg",
                    content: "Study ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636968017/Memory-snap%20images/photo-1473042904451-00171c69419d_eqplgf.jpg",
                    content: "City Streets",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972075/Memory-snap%20images/photo-1488085061387-422e29b40080_v4rnco.jpg",
                    content: "Sunset in the sky",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967719/Memory-snap%20images/photo-1473172707857-f9e276582ab6_x4d8ry.jpg",
                    content: "Stand in the sunset",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972282/Memory-snap%20images/photo-1555830142-c2872abca63f_bivpab.jpg",
                    content: "Flowers from my mom",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636971919/Memory-snap%20images/photo-1476514525535-07fb3b4ae5f1_i7dhwx.jpg",
                    content: "Mountains ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967703/Memory-snap%20images/photo-1460627390041-532a28402358_gopha1.jpg",
                    content: "Sunset by the pool",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967642/Memory-snap%20images/photo-1540959733332-eab4deabeeaf_vrqzxk.jpg",
                    content: "Japan Drawing",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923381/Memory-snap%20images/photo-1504674900247-0877df9cc836_a1hjuo.jpg",
                    content: "Lunch made by my friend",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972186/Memory-snap%20images/photo-1489864341077-e204d82219b8_i0r6rv.jpg",
                    content: "Hanging Flower",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972637/Memory-snap%20images/photo-1580751565620-a46e24e97eda_iwlexh.jpg",
                    content: "Preparing for concert",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972543/Memory-snap%20images/photo-1464037866556-6812c9d1c72e_vr2uye.jpg",
                    content: "Sunset by the airplane",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972699/Memory-snap%20images/photo-1565034400360-c92c85339af9_b0m5nw.jpg",
                    content: "Best night at the **** Concert!!",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636690229/Memory-snap%20images/photo-1528099992633-22a7ca399bb1_dvlds6.jpg",
                    content: "Boat restaurant by the lake",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636690145/Memory-snap%20images/photo-1445712525433-eba07da78bd2_gwmmyn.jpg",
                    content: "Many rocks in the mountain",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923258/Memory-snap%20images/photo-1612886172169-444b2863dd82_z6pn6i.jpg",
                    content: "look up at the city building",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638922508/Memory-snap%20images/photo-1429734956993-8a9b0555e122_wgza1b.jpg",
                    content: "sunset on vacation",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636973304/Memory-snap%20images/photo-1598826739205-d09823c3bc3d_whtpln.jpg",
                    content: "rock stack by the lake",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972951/Memory-snap%20images/photo-1581291518857-4e27b48ff24e_oe4cp6.jpg",
                    content: "create wireframe for new app",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972590/Memory-snap%20images/photo-1484249326436-4e8628de5c54_lilvnu.jpg",
                    content: "City from the sky",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972497/Memory-snap%20images/photo-1521120367316-e47e63ca9913_j9cipo.jpg",
                    content: "flowers and breakfast from my love",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636691000/Memory-snap%20images/photo-1559592413-7cec4d0cae2b_pqaair.jpg",
                    content: "bridge on statue hand.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923655/Memory-snap%20images/photo-1534422298391-e4f8c172dddb_tg59pw.jpg",
                    content: "Dumplings. yumm",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923507/Memory-snap%20images/photo-1476224203421-9ac39bcb3327_aquncv.jpg",
                    content: "lunch with my lovely friends",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972366/Memory-snap%20images/photo-1520532141146-da0ff89cae4b_rllwle.jpg",
                    content: "Lighthouse near the park",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638922730/Memory-snap%20images/photo-1611416457332-946853cc75d6_tbxg3x.jpg",
                    content: "City while I cruise on a ship",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638937197/Memory-snap%20images/photo-1517154421773-0529f29ea451_as2ly9.jpg",
                    content: "walking in South Korea",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Photos", null, {
            truncate: true,
            cascade: true,
            restartIdentity: true,
        });
    },
};
