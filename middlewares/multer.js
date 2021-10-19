const multer = require("multer")
const storage = multer.memoryStorage()
const maxSize = 1024 * 1024
const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  // fileFilter: (req, res, cb) => {
  //   if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
  //     cb(null, true)
  //   } else {
  //     cb(null, false)
  //     return cb(new Error("File invalid!"))
  //   }
  // },
})

module.exports = upload
