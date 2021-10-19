"use strict"
const { Model } = require("sequelize")
const { hashingPassword } = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Product, { through: "Transaction", foreignKey: "userId" })
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username is required!",
          },
          notNull: {
            msg: "Username is required!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email is already exists",
        },
        validate: {
          notEmpty: {
            msg: "Email is required!",
          },
          notNull: {
            msg: "Email is required!",
          },
          isEmail: {
            msg: "Email invalid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is required!",
          },
          notNull: {
            msg: "Password is required!",
          },
          len: {
            args: [6, 16],
            msg: "The password length should be between 6 and 16 characters.",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashingPassword(user.password)
          user.role = "Cashier"
          user.status = "pending"
        },
      },
      sequelize,
      modelName: "User",
    }
  )
  return User
}
