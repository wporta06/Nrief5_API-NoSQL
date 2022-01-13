const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    customer: {
        type: 'string'
    },
    room: {
        type: 'string',
    },
    checkIn: Date,
    checkOut: Date,
    reservedAt: {
        type: Date,
        default: () => Date.now(),
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema)