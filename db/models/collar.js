"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class collar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.order_detail, {
        through: "collarOrderDetails",
      });
      this.belongsToMany(models.wishlist, { through: "collarWishlists" });
    }
  }
  collar.init(
    {
      collar_name: DataTypes.STRING,
      additional_cost: DataTypes.INTEGER,
      image_one: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "collar",
    }
  );
  return collar;
};
