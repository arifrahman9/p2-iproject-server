const router = require("express").Router()
const userRoutes = require("./user-routes")
const productRoutes = require("./product-routes")
const categoryRoutes = require("./category-routes")
const brandRoutes = require("./brand-routes")
const errorHandler = require("../helpers/errorHandler")

router.use("/users", userRoutes)
router.use("/products", productRoutes)
router.use("/categories", categoryRoutes)
router.use("/brands", brandRoutes)
router.use(errorHandler)

module.exports = router
