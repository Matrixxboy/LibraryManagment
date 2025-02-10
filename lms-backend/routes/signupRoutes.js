const router = require("express").Router();
const {signUpValidation,loginValidation} = require("../middlewares/LoginSignUpvalidation");
const {signup,login} = require("../controllers/authController");

router.post('/login', loginValidation, login);
router.post('/signup', signUpValidation, signup);

module.exports = router;