const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({

    id:{
        type:Number,
        required: false
    },
    name:{
        type:String,
        required:true
    },
    alpha2Code:{
        type:String,
        required:true
    },
    alpha3Code:{
        type:String,
        required:true
    }


})

const CountryModel = mongoose.model('countries', CountrySchema);
module.exports = CountryModel;