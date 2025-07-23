const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/BookingController');
const { authenticate } = require('../middleware/auth');

// Protected routes
router.use(authenticate);

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);

module.exports = router;