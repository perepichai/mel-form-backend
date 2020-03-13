const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// const email = require('../../emailing/Email');
// const sql = require('../../sql/Register');
// const sqlGetValue = require('../../sql/GetValue');
// const pdf = require('../../pdf/CreateReceipt');
// const liqpay = require('../../payment/liqpay/PayButton');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


router.post('/', (req, res) => {
      res.send(req.body);
});

module.exports = router;
