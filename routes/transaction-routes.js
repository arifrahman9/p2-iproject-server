const router = require("express").Router()
const TransactionController = require("../controller/transactionController")
const authentication = require("../middlewares/authentication")

router.use(authentication)
router.post("/:productId", TransactionController.createTransaction)

module.exports = router
