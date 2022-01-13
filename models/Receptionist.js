const mongoose = require('mongoose');

const ReceptionistSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        default: 'customer'
    },
})

module.exports = mongoose.model('Receptionist', ReceptionistSchema)