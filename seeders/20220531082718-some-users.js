'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "users",
        [
          {
            name: "Leo Messi",
            email: "lto@messi.com",
            phone: 123455667,
            password: "tegggst",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Dan Abramov",
            email: "dabo@redux.com",
            phone: 177234567,
            password: "tesjjt",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
    );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
