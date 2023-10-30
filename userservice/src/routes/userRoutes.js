const express = require("express")
const app = express()
const router = express.Router()

const { signup, login } = require('../controllers/userController')

router.post('/signup', async (req, res) => {
  console.log('signup')
  const signUpData = req.body
  console.log(signUpData)
  try {
    const savedData = await signup(signUpData)
    res.status(201).json({ message: "succesfully created acount", user: savedData })
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user account' });
  }
})

// const signupData = {
//   email: "kt@gmail.com",
//   password: "83328tiwu",
//   profilePictureUrl: "www.propic.com",
//   username: "kt11",
//   nickname: "kanty",
// }

//signup(signupData)


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.status(201).json({ user, message: "login succesfull" });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;