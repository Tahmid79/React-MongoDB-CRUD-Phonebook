const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;


const phoneSchema  = new Schema({
    name : String ,
    phone : Number
}) ;


const Phone = mongoose.model('phonebooks' , phoneSchema) ;
//Phone
module.exports = Phone ;
