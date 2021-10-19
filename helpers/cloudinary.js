const cloudinary = require("cloudinary")
const { Product } = require("../models")

cloudinary.config({
  cloud_name: "iprojectcashier",
  api_key: "459327367978113",
  api_secret: "J2EJ4rsOXolcq_RA9qdlls6zi-I",
})

cloudinary.v2.uploader.upload("../img/product2.png", { public_id: "Cashier" }, function (error, result) {
  console.log(result)
})

module.exports = cloudinary
