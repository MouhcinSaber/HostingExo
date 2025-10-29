const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    FavoriteColor: {
        type: String,
        required: true
    },
    FavoriteClub: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Form', FormSchema);
