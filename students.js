const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    roll_number: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        maxlength: 255
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10,15}$/, 'Please fill a valid phone number']
    },
    class: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    points_history: [{
        points: {
            type: Number,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

studentSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

module.exports = mongoose.model('Student', studentSchema);
