const express = require("express");
const router = express.Router();
const { deleteUser } = require("../mysql/queries");

router.delete("/", async (req, res) => {
  await req.asyncMySQL(deleteUser(req.headers.id));

  res.send({ status: 1 });
});

module.exports = router;
