const express = require('express');
const mongoose = require('mongoose');
const isLoggedin = require('../middlewares/isLoggedin');
const router = express.Router();
const productModel = require("../models/product-model");
const userModel = require('../models/user-model');

router.get("/", (req,res) => {
    let error = req.flash("error");
    res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggedin, async (req,res) => {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", {products, success});
});

router.get("/cart", isLoggedin, async (req,res) => {
    let user = await userModel
    .findOne({ email: req.user.email})
    .populate("cart");

    console.log(user.cart);

    // res.render("cart", { user });
});

router.get("/addtocart/:productid", isLoggedin, async (req,res) => {
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect("/shop");
});

// router.get("/shop", isLoggedin, (req,res) => {
//     res.render("shop");
// })

module.exports = router;
