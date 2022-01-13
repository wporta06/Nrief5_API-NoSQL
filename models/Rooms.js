const mongoose = require('mongoose');

const RoomsSchema = mongoose.Schema({
    status: {
        type: 'string',
        default: 'notreserved'
    },
    price: {
        type: 'string',
        default: '100'
    },
    note: {
        type: 'string'
    }
})

module.exports = mongoose.model('Rooms', RoomsSchema)