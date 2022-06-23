"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [{
      name: "Burhan",
      email: "demo@demo.com",
      password: "$321!pass!123$",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};