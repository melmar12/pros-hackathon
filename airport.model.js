const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Airport = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Airport', Airport);
