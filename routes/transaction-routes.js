const router = require("express").Router()
const TransactionController = require("../controller/transactionController")
const errorHandler = require("../helpers/errorHandler")
const authentication = require("../middlewares/authentication")

router.use(authentication)
router.post("/:productId", TransactionController.createTransaction)
router.get("/:id", TransactionController.getTransaction)

router.use(errorHandler)
module.exports = router
