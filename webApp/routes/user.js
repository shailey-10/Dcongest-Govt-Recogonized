const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();

router.get('/', userController.getIndex);
router.get('/BusRec', userController.getBusRec);
router.get('/BusReccomend', userController.getBusReccomend);
router.get('/time', userController.getTimeRec);
router.get('/trans', userController.getTrans);
router.get('/pool', userController.getCarpool);
router.get('/step1', userController.getStep1);
router.get('/step2', userController.getStep2);
router.get('/step3', userController.getStep3);
module.exports = router;
