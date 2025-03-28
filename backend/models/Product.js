const mongoose = require("mongoose");
//const slugify = require('slugify');
const Schema = mongoose.Schema;

const productSchema = new Schema({ 
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true
    },
    description: {
        type: String,

    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: "Category", 
    }],
    brand:{
        type: String, 
        
    },
    price: {
        type: Number,
        required: true
    }, 
    imgURL: {
        data: Buffer,
        contentType: String,
    }

});  
productSchema.index({ name: 'text', description: 'text' });

productSchema.pre('save', function(next) {
    this.slug = this.name.replace(/[^a-zA-Z ]/g, "").split(' ').join('-').toLowerCase();
    next();
});
const Product = mongoose.model('Product', productSchema);

Product.collection.createIndex({ name: 'text', description: 'text' }, function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log("Text index created successfully.");
    }
}); 

module.exports = Product