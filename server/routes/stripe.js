const config = require("config");
const router = require("express").Router();
const stripe = require("stripe")("sk_test_51L2UWOCcRCFByi1NGiLGKZlNdNX6SS67W9MAqvma75DEXUiWpBP4McFW0kTsJgglVNwi6reQ8ucJkw8bxQ4hqKrF0028gQNXrL");

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;