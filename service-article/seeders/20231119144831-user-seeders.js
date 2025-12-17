"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Dynno",
        profesion: "Programmer",
        role: "admin",
        email: "z7kUe@example.com",
        password: await bcrypt.hash("12345", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Michelle",
        profesion: "Data Analyst",
        role: "student",
        email: "misel@example.com",
        password: await bcrypt.hash("12345", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
