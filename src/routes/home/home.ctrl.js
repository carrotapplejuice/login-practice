"use strict";

const home = (req, res) => {
    res.render("home/index");
};

function login(req, res) {
    res.render("home/login");
};

module.exports = {
    home,
    login,
    //  hello:hello
    //  login:login
};