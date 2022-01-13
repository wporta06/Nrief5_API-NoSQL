const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const cors = require('cors');

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// for .env fille
// require('dotenv/config')

// Imposrt routes
const roomsRoute = require('./routes/roomsRoute');
const customerRoute = require('./routes/adminRoutes/customerDashboardRoute');
const reservationRoute = require('./routes/reservationRoute');
const reservationDashboardRoute = require('./routes/adminRoutes/reservationDashboardRoute');


// ROUTES
app.get('/', (req, res) => {
    res.send('homeee')
});

app.use('/rooms', roomsRoute);
app.use('/customers', customerRoute);
app.use('/reservation', reservationRoute);
app.use('/reservationDashboard', reservationDashboardRoute);

// mongoose.connect(process.env.DB_CONNECTION, () => { console.log('connected to db') })
mongoose.connect('mongodb+srv://hoteldb:admin123@cluster0.rdrot.mongodb.net/quizdb?retryWrites=true&w=majority', () => { console.log('connected to db') })

app.listen(3000)