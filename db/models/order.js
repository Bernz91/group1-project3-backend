"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.order_detail);
      this.belongsTo(models.user)
      this.belongsTo(models.wishlist)
    }
  }
  order.init(
    {
      payment_id: DataTypes.INTEGER,
      user_id: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      shipping_fee: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
      // underscored: true,
    }
  );
  return order;
};
