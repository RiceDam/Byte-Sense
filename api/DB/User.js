const mongoose = require("mongoose");
const user = new mongoose.Schema
({
    userName:
    {
        type: String
    },
    password:
    {
        type: String
    }
});

module.exports = User = mongoose.model("user", user);