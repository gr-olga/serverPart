'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "todoLists",
            [
                {
                    name: "Music",
                    userId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Dancing",
                    userId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Drawing",
                    userId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("todoLists", null, {});
    }
};
