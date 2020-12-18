const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subcategorySchema = new schema({
    subcatname: {
        type: String,
        required: true
    }
});

const categorySchema = new schema({
    name: {
        type: String,
        required: true
    },
    subcategory:[subcategorySchema]
});

module.exports.categoryModel=mongoose.model('category',categorySchema);