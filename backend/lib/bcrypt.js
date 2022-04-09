const bcrypt = require("bcryptjs")

const createHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)

  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

const matchedPassword = async (enteredPassword, registeredPassword) => {
  const matched = await bcrypt.compare(enteredPassword, registeredPassword)

  return matched
}

module.exports = { createHashedPassword, matchedPassword }
