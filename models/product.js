"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "categoryId" })
      Product.belongsTo(models.Brand, { foreignKey: "brandId" })
      Product.belongsToMany(models.User, { through: "Transaction", foreignKey: "productId" })
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please input name product!",
          },
          notNull: {
            msg: "Please input name product!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please input price product!",
          },
          notNull: {
            msg: "Please input price product!",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please input stock product!",
          },
          notNull: {
            msg: "Please input stock product!",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  )
  return Product
}
