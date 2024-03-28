const express=require('express');
const router=express.Router();
const contactController=require('../Controller/ContactController');

router.post('/',contactController.ContactController);

module.exports = router;