"use strict"

const { hashingPassword } = require("../helpers/bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let user = [
      {
        username: "Arif Rahman",
        email: "admin@gmail.com",
        password: hashingPassword("admin"),
        role: "Admin",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Arif Rahman",
        email: "cashier@gmail.com",
        password: hashingPassword("cashier"),
        role: "Cashier",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    await queryInterface.bulkInsert("Users", user, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  },
}
