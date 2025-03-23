const express = require('express');
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const {registerUser, loginUser, logout} = require("../controllers/authController");

router.get("/", (req,res) => {
    res.send("hello USERS its working");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logout);

module.exports = router;