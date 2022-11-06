const express = require("express");
const router = express.Router();
const { updateUser } = require("../mysql/queries");
const sha256 = require("sha256");

router.put("/", async (req, res) => {
  let { name, email, password } = req.body;
  const { id } = req.headers;
  password = sha256(process.env.SALT + password);
  await req.asyncMySQL(updateUser(id, name, email, password));

  res.send({ status: 1 });
});

module.exports = router;
