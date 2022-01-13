const mongoose = require('mongoose');

const ReceptionistSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    email: {
        type: 'string',
        require: true
    },
    role: {
        type: 'string',
        default: 'customer'
    },
})

module.exports = mongoose.model('Receptionist', ReceptionistSchema)