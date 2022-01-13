const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    cin: {
        type: 'string',
        require: true
    },
    phone: {
        type: 'string',
        require: true
    },
    role: {
        type: 'string',
        default: 'customer'
    },
})

module.exports = mongoose.model('Customer', CustomerSchema)