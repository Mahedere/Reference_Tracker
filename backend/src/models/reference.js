const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema({
    referenceNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['used', 'available'],
        default: 'used'
    },
    projectDescription: {
        type: String,
        required: true
    },
    propertyDetails: {
        type: String,
        required: true
    },
    propertyLocation: {
        type: String,
        required: true
    },
    valuationType: {
        type: String,
        enum: ['residential', 'commercial', 'industrial', 'other'],
        required: true
    },
    reportStatus: {
        type: String,
        enum: ['draft', 'completed'],
        default: 'draft'
    },
    createdBy: {
        type: String,
        required: true
    },
    attachments: [{
        filename: String,
        path: String,
        uploadDate: Date
    }],
    comments: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Reference', referenceSchema);