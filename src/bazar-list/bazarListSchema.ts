const mongoose = require('mongoose')
const bazarListSchema = mongoose.Schema({
        cost: String,
        item_name: String
    }, {timestamp: true}
)
module.exports = new mongoose.model("bazar_list", bazarListSchema)