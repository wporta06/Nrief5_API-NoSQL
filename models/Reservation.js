const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    customer: {
        type: 'string',
        required: true
    },
    room: {
        type: 'string',
        required: true
    },
    checkIn: Date,
    checkOut: Date,
    reservedAt: {
        type: Date,
        default: () => Date.now(),
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema)