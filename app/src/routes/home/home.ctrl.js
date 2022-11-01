"use strict";

const output = {

    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    }
}


const users = {
    id: ["id1", "id2", "id3"],
    password: ["password1", "password2", "password2"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다"
        })
    }
}

module.exports = {
    output,
    process
};