const db = require("../models");

exports.loginAuthority = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const branch = await db.Branch.findOne({ Branch_Name: username });
    const valid = await branch.comparePassword(password);

    if (valid) {
      const data = await db.Order.find({});
      res.status(data);
    } else {
      console.log("no such branch exist");
    }
  } catch (err) {
    next(err);
  }
};
