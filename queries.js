const db = require('./sql');


const getProducts = () => {
    return db.execute('SELECT * FROM candyshop.products');
}


module.exports = { getProducts }