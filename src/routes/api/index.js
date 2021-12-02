const router = require('express').Router();
const carRoutes = require('./car-routes');
const customerRoutes = require('./customer-routes');
const documentRoutes = require('./document-routes');
const driverRoutes = require('./driver-routes');
const locationRoutes = require('./location-routes');
const paymentRoutes = require('./payment-routes');
const tripRoutes = require('./trip-routes');

router.use('/cars', carRoutes);
router.use('/customers', customerRoutes);
router.use('/documents', documentRoutes);
router.use('/drivers', driverRoutes);
router.use('/locations', locationRoutes);
router.use('/payments', paymentRoutes);
router.use('/trips', tripRoutes);

module.exports = router;