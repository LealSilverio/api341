const router = require('express').Router();

const contactsController = require('../controller/contacts');

router.get('/', contactsController.getData);
router.get('/:id', contactsController.getByID);

module.exports = router;