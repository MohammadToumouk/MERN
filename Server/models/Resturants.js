const mongoose = require('mongoose')


const AddressSchema = new mongoose.Schema({
    street:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    plz:{
        type:Number,
        required:true
    },

});

const ResturantsSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    adress:{
        type:[AddressSchema],
        required: false
    }


})

const ResturantModel = mongoose.model('resturants', ResturantsSchema);
module.exports = ResturantModel;