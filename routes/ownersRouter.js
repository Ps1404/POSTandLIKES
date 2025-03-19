const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello owners its working");
});

module.exports = router;