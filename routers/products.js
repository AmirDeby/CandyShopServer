const router = require('express').Router();
const { getProducts } = require('../queries')

router.get('/', async (req, res) => {

    const [result] = await getProducts();
    setTimeout(() => {
        res.status(200).send(result);
    }, 2000)

});


module.exports = router;