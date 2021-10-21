const getPagination = (page, size) => {
  const limit = size ? +size : 6
  const offset = page ? page * limit - limit : 0

  return { limit, offset }
}

module.exports = getPagination
