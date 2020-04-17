const router = require('express').Router();
const { getProducts } = require('../queries')

router.get('/', async (req, res) => {

    const [result] = await getProducts();

    res.send(result);
});


module.exports = router;