const db = require("../models");

exports.addOrder = async (req, res, next) => {
  try {
    const { pincode, name, mobile } = req.body;
    const branches = await db.Pincode.findOne({ pincode: pincode });
    if (branches) {
      const order = await db.Order.create({
        branches: branches.provider,
        name,
        mobile,
      });
      await order.save();
      res.status(200).json(branches.provider);
    } else {
      res.status(200).status({ msg: "No branch available" });
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await db.Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};
