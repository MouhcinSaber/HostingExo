const mongoose = require('mongoose');
const uri = process.env.DTB;

module.exports.connectDB = async function () {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}
