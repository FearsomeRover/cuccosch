var Schema = require('mongoose').Schema;
var db = require('../config/db');
const mongoose = require("mongoose");

var Cucc = db.model('Cucc', {
    name: {
        type: String,
        required: true,
    },
    elerheto: Boolean,
    // _place: {
    //     type: Schema.Types.ObjectId,
    //     ref:"Szoba",
    // }
    place: Number

});

module.exports = Cucc;
