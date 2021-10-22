const router = require("express").Router()
const ProductController = require("../controller/productController")
const errorHandler = require("../helpers/errorHandler")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")
const upload = require("../middlewares/multer")

router.use(authentication)
router.get("/", ProductController.getAllProduct)
router.get("/:productId", ProductController.getOneProduct)

router.use(authorization)
router.post("/", upload.single("imageUrl"), ProductController.createProduct)
router.put("/:productId", upload.single("imageUrl"), ProductController.editProduct)
router.delete("/:productId", ProductController.deleteProduct)

router.use(errorHandler)
module.exports = router
