const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");

module.exports = async function (req, res, next) {
    if(!req.cookies.token) {
        res.flash("error", "u need to login first");
        return res.redirect("/");
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
        .findOne({email: decoded.email})
        
    }
}