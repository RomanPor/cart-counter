const express = require('express');
const config = require('config');

const PORT = config.get('port') || 5000
const app = express();
app.use(express.json());
app.use('/cart', require('./routes/cart'));
app.use('/catalog', require('./routes/catalog'));

app.listen(PORT);

