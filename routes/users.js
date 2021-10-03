const express = require('express');
const router = express.Router();

// @route     POST api/users
// @desc      register a user
// @access    Public


router.post('/', ( req, res) => {
    res.send('Register A user');
});

module.exports = router;