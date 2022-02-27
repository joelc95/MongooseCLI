const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
        default: 'Not specified'
    }
})

const Show = mongoose.model("Show", showSchema)

module.exports = Show;