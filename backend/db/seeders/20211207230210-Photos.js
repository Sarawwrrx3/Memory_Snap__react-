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
                    title: "Flower",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972148/Memory-snap%20images/photo-1593642532842-98d0fd5ebc1a_qv4tuf.jpg",
                    title: "Study ",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636968017/Memory-snap%20images/photo-1473042904451-00171c69419d_eqplgf.jpg",
                    title: "City Streets",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972075/Memory-snap%20images/photo-1488085061387-422e29b40080_v4rnco.jpg",
                    title: "Sunset in the sky",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967719/Memory-snap%20images/photo-1473172707857-f9e276582ab6_x4d8ry.jpg",
                    title: "Stand in the sunset",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972282/Memory-snap%20images/photo-1555830142-c2872abca63f_bivpab.jpg",
                    title: "Flowers from my mom",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636971919/Memory-snap%20images/photo-1476514525535-07fb3b4ae5f1_i7dhwx.jpg",
                    title: "Mountains ",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967703/Memory-snap%20images/photo-1460627390041-532a28402358_gopha1.jpg",
                    title: "Sunset by the pool",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636967642/Memory-snap%20images/photo-1540959733332-eab4deabeeaf_vrqzxk.jpg",
                    title: "Japan Drawing",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923381/Memory-snap%20images/photo-1504674900247-0877df9cc836_a1hjuo.jpg",
                    title: "Lunch made by my friend",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972186/Memory-snap%20images/photo-1489864341077-e204d82219b8_i0r6rv.jpg",
                    title: "Hanging Flower",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972637/Memory-snap%20images/photo-1580751565620-a46e24e97eda_iwlexh.jpg",
                    title: "Preparing for concert",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972543/Memory-snap%20images/photo-1464037866556-6812c9d1c72e_vr2uye.jpg",
                    title: "Sunset by the airplane",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972699/Memory-snap%20images/photo-1565034400360-c92c85339af9_b0m5nw.jpg",
                    title: "Best night at the **** Concert!!",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636690229/Memory-snap%20images/photo-1528099992633-22a7ca399bb1_dvlds6.jpg",
                    title: "Boat restaurant by the lake",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 1,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636690145/Memory-snap%20images/photo-1445712525433-eba07da78bd2_gwmmyn.jpg",
                    title: "Many rocks in the mountain",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923258/Memory-snap%20images/photo-1612886172169-444b2863dd82_z6pn6i.jpg",
                    title: "look up at the city building",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 1,
                    albumID: 6,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638922508/Memory-snap%20images/photo-1429734956993-8a9b0555e122_wgza1b.jpg",
                    title: "sunset on vacation",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636973304/Memory-snap%20images/photo-1598826739205-d09823c3bc3d_whtpln.jpg",
                    title: "rock stack by the lake",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 8,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972951/Memory-snap%20images/photo-1581291518857-4e27b48ff24e_oe4cp6.jpg",
                    title: "create wireframe for new app",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972590/Memory-snap%20images/photo-1484249326436-4e8628de5c54_lilvnu.jpg",
                    title: "City from the sky",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 7,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972497/Memory-snap%20images/photo-1521120367316-e47e63ca9913_j9cipo.jpg",
                    title: "flowers and breakfast from my love",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636691000/Memory-snap%20images/photo-1559592413-7cec4d0cae2b_pqaair.jpg",
                    title: "bridge on statue hand.",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923655/Memory-snap%20images/photo-1534422298391-e4f8c172dddb_tg59pw.jpg",
                    title: "Dumplings. yumm",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }, 
                {
                    userID: 4,
                    albumID: 4,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638923507/Memory-snap%20images/photo-1476224203421-9ac39bcb3327_aquncv.jpg",
                    title: "lunch with my lovely friends",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 2,
                    albumID: 2,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1636972366/Memory-snap%20images/photo-1520532141146-da0ff89cae4b_rllwle.jpg",
                    title: "Lighthouse near the park",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 3,
                    albumID: 3,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638922730/Memory-snap%20images/photo-1611416457332-946853cc75d6_tbxg3x.jpg",
                    title: "City while I cruise on a ship",
                    description: "This is a description of the photo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    userID: 5,
                    albumID: 5,
                    imageUrl:
                        "https://res.cloudinary.com/dgvjnmw0o/image/upload/v1638937197/Memory-snap%20images/photo-1517154421773-0529f29ea451_as2ly9.jpg",
                    title: "walking in South Korea",
                    description: "This is a description of the photo",
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
