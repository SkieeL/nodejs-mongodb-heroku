const express = require('express')

router = express.Router();

router.get('/', (req, res) => {
    res.send('Api UP!')
})


module.exports = router;