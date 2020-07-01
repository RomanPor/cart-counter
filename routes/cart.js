const {Router} = require('express');
const router = Router();

const getValute = require('../models/valute');

router.post('/count', (req, res) => {
    const sum = {};
    sum['RUB'] = req.body.reduce(function(sum, current) {
        return sum + (current.price * current.quantity);
    }, 0);
    console.log(sum);
    getValute().then((data) => {
        Object.keys(data).forEach(it => {
            sum[it] = (sum['RUB'] / data[it]).toFixed(2);
        });
            res.status(201).json(sum)
        });
});

module.exports = router;
