const router = require("express").Router();
const handle = require("../handlers");

router.post("/add", handle.addOrder);
router.get("/all", handle.getOrders);

module.exports = router;
