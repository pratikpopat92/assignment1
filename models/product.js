const mongoose = require('mongoose');
const schema = mongoose.Schema;

const { categoryModel }=require('../models/category');
const productSchema=new schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:categoryModel
});

module.exports.productModel=mongoose.model('product',productSchema);