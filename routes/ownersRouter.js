const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owners-model");

router.get("/", (req,res) => {
    res.send("hello owners its working");
});

console.log(process.env.NODE_ENV);

router.post("/create", (req,res) => {
    res.send("hello owners its working");
});

module.exports = router;