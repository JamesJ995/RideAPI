const router = require('express').Router();
const carRoutes = require('./car-routes');
const customerRoutes = require('./customer-routes');
const documentRoutes = require('./document-routes');
const driverRoutes = require('./driver-routes');

router.use('/cars', carRoutes);
router.use('/customers', customerRoutes);
router.use('/documents', documentRoutes);
router.use('/drivers', driverRoutes);

module.exports = router;