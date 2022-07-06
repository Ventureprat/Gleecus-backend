const router = require("express").Router();

//Model
const totalhrs = require("../Model/totalhrs");

router.get("/", (req, res) => {
  totalhrs.find({}, { _id: 0 }).exec((err, data) => {
    if (err) {
      throw new Error(err);
    } else if (data.length == 0) {
      res.status(200).json({
        text: "No data Found",
      });
    } else {
      res.status(200).json({
        text: "data fetched Successfully",
        data,
      });
    }
  });
});

module.exports = router;
