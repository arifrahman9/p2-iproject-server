const router = require("express").Router()
const ProductController = require("../controller/productController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")
const upload = require("../middlewares/multer")

router.use(authentication)
router.get("/", ProductController.getAllProduct)
router.post("/", authorization, upload.single("imageUrl"), ProductController.createProduct)
router.delete("/:productId", authorization, ProductController.deleteProduct)
module.exports = router
