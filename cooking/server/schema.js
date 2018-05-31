const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    view: String,
    img: Array,
    name: String,
    description: String,
    ingredients: Array,
    cooking: Array,
    data: { type: Date, default: Date.now() }
});

module.exports = recipeSchema;