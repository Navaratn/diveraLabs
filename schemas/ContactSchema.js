const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
    },
    email: {
        type: String,
        required: [true, "must provide an email"],
    },
    subject: {
        type: String,
        required: [true, "must provide a subject"],
    },
    message: {
        type: String,
        required: [true, "must provide a message"],
    }
});

module.exports = mongoose.model('Contacts', ContactSchema);