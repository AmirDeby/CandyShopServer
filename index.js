const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routers/products');
const port = process.env.PORT;


app.use(cors());
app.use(express.json());

app.use('/products', productRouter);


app.use('*', (req, res) => {
    res.status(404).send('page not found');
});



app.listen(port, () => {
    console.log(`server is up: ${port}`);
});

