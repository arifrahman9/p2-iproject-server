"use strict"
const user = require("../data/user.json")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    user.forEach((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Users", user, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  },
}
