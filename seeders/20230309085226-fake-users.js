"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          role: "user",
          uuid: "3340b7ab-0d45-4568-91d8-dee3cd31e191",
          createdAt: "2023-03-09 08:48:29",
          updatedAt: "2023-03-09 08:49:41",
        },
        {
          name: "Devid Doe",
          email: "devid@gmail.com",
          role: "user",
          uuid: "3340b7ab-0d45-4568-91d8-dee3cd31e191",
          createdAt: "2023-03-09 08:48:29",
          updatedAt: "2023-03-09 08:49:41",
        },
        {
          name: "Sam",
          email: "sam@gmail.com",
          role: "user",
          uuid: "3340b7ab-0d45-4568-91d8-dee3cd31e191",
          createdAt: "2023-03-09 08:48:29",
          updatedAt: "2023-03-09 08:49:41",
        },
        {
          name: "Misshel",
          email: "misshel@gmail.com",
          role: "user",
          uuid: "3340b7ab-0d45-4568-91d8-dee3cd31e191",
          createdAt: "2023-03-09 08:48:29",
          updatedAt: "2023-03-09 08:49:41",
        },
        {
          name: "Advin",
          email: "advin@gmail.com",
          role: "user",
          uuid: "3340b7ab-0d45-4568-91d8-dee3cd31e191",
          createdAt: "2023-03-09 08:48:29",
          updatedAt: "2023-03-09 08:49:41",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
