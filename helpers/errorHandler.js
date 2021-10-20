const errorHandler = (err, req, res, next) => {
  console.log(err)
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message })
      break
    case "Waiting Approved":
      res.status(400).json({ message: "Please wait for email confirmation" })
      break
    case "Email is empty":
      res.status(400).json({ message: "Email is required!" })
      break
    case "Password is empty":
      res.status(400).json({ message: "Password is required!" })
      break
    case "Forbidden":
      res.status(403).json({ message: "You cannot access!" })
      break
    case "Product not found":
      res.status(404).json({ message: "Product not found!" })
      break
    case "Invalid productId":
      res.status(400).json({ message: "Id must be number!" })
      break
    case "Image not found":
      res.status(400).json({ message: "Image not found!" })
      break
    case "Transaction failed":
      res.status(400).json({ message: "Transaction failed!" })
      break
    case "Invalid UserId":
      res.status(400).json({ message: "UserId must be number!" })
      break
    case "User not found":
      res.status(400).json({ message: "User not found!" })
      break
    default:
      res.status(500).json(err)
      break
  }
}

module.exports = errorHandler
