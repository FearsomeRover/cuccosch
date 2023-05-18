var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Szoba = db.model('Szoba', {
    szobaszam: {
        type: String,
        required: true,
    },
    lakok: [String],
    _items: {
        type: [Schema.Types.ObjectId],
        ref:"Cucc",
    },
    items: [String]

});

module.exports = Szoba;
