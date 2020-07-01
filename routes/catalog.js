const {Router} = require('express');

const getValute = require('../models/valute');
const getCatalog = require('../models/catalog')
const router = Router();

router.get('/list', (req, res) => {
    Promise.all([
            getValute(),
            getCatalog()
        ])
        .then(([valute, catalog]) => {
            const response = JSON.stringify(catalog.map((item) => {
                let valutes = {[item.currency]: item.price};
                let newItem = {};
                Object.keys(valute).forEach(it => {
                    valutes[it] = (item.price / valute[it]).toFixed(2);
                    newItem = {valutes, ...item};
                });
                return newItem;
            }))
            res.end(response);
        })
        .catch(() => res.status(500).json({message: "Что-то пошло не так!"}))
});

module.exports = router;
