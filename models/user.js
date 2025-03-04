const mongoose = require("./connection")

const { Schema, model } = mongoose

const userSchema = new Schema({
    username: String,
    password: String
})

const User = model('User', userSchema)

module.exports = User

