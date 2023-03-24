var express = require("express");
var router = express.Router();
const stripe = require("stripe")("sk_test_51HT8IVHye9tS9SYFD5AXDo4OeYEKefB1jTA4jciDnAjqiBFWQgphkiEyr5bKmqpfUnJwN2xQZRmqCStRypO2ibgq00F1dCbLsB");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeSucess) => {
    if (stripeErr) {
      console.log(stripeErr);

      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ sucess: stripeSucess });
    }
  });
});

module.exports = router;
