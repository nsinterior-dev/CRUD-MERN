// this is the schema that will be call in index.js
// this is a json 

const mongoose = require('mongoose');

//create an object
const FoodSchema = new mongoose.Schema({
    foodName : {
        type: String,
        required : true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    },
});

const Food = mongoose.model("foods", FoodSchema);
module.exports = Food;