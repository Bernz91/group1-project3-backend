"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      paymentId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      subtotal: {
        type: Sequelize.STRING,
      },
      shippingFee: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      shippingAddress: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
