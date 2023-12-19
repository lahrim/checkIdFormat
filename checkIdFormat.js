const mongoose = require('mongoose')

function checkIdFormat(id) {
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id)
  let isValid = true

  if(!isValidObjectId) isValid = false

  return isValid
}

module.exports = { checkIdFormat }
