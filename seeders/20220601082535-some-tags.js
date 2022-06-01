'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "tags",
            [
                {
                    title: "foo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "boo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "loo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("tags", null, {});
    }
};
