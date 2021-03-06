'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "todoItems",
            [
                {
                    task: "do good",
                    deadline: "monday",
                    listId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    task: "do bad",
                    deadline: "friday",
                    listId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("todoItems", null, {});
    }
};
