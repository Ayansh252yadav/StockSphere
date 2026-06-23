const { Signup } = require("../Controllers/AuthController");
const{Login}=require("../Controllers/AuthControllerLogin")
const { Logout } = require("../Controllers/AuthControllerLogout");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
module.exports = router;