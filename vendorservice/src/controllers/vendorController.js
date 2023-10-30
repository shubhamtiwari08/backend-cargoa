const { Vendor } = require('../models/vendor.model')

async function signup(userData) {
  try {
    const newUser = await Vendor(userData)
    const savedUser = await newUser.save()
    console.log("vendor saved successfully", savedUser)
  } catch (error) {
    throw error
  }
}

async function login(email, password) {
  try {
    const user = await Vendor.find({ email })

    if (user && user.password === password) {
      console.log("logged in vendor ", user)
      return user
    } else {
      throw new Error("vendor not found");
    }
  } catch (e) {
    throw e
  }
}

module.exports = { signup, login }