const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send("<h1>Running...</h1><br /><p>Version: 1.0.2</p><br /><p>Dev: v1nni7</p>")
});

module.exports = router;