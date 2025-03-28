const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({ 
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    description: {
        type: String,
    }
});  

categorySchema.index({ name: 'text', description: 'text' });
const Category = mongoose.model('Category', categorySchema);

Category.collection.createIndex({ name: 'text', description: 'text' }, function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log("Text index created successfully.");
    }
}); 

module.exports = Category;