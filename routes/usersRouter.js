const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello USERS its working");
});

module.exports = router;