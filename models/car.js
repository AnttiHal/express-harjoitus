const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: String,
    model: String,
    year: String,
    doors: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Car = mongoose.model('cars', carSchema);

module.exports = Car;