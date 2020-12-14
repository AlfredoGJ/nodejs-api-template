'use strict';

// Router
const router = require('express').Router();
const health = require('./index');

// Health
router.get('/', health.getOrder);
router.post('/',health.postOrder)

// Export the router
module.exports = router;