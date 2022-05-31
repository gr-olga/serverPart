'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "todoItems",
            [
                {
                    task: "do good",
                    deadline: "monday",
                    userList: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    task: "do bad",
                    deadline: "friday",
                    userList: "2",
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
