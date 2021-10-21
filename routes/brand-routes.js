const router = require("express").Router()
const BrandController = require("../controller/brandController")
const errorHandler = require("../helpers/errorHandler")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.use(authentication)
router.post("/", authorization, BrandController.addBrand)
router.get("/", BrandController.getBrand)

router.use(errorHandler)
module.exports = router
