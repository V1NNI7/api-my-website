const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send("<h1>API V1nni7 - Version: 1.0.0 - Status: Ok</h1>")
});

module.exports = router;    