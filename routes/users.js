const express = require("express");
const router = express.Router();
const { userService } = require("../services");

router.get("/", async (req, res) => {
  try {
    const users = await userService.load();
    res.render("users", { users: users });
  } catch (e) {
    throw new Error("User Database cannot be loaded!");
  }
});

router.get("/:userId", async (req, res) => {
  const user = await userService.find(req.params.userId);
  res.render("user", { user: user });

  //61596be36be47a137370f548

  //null gelirse 404 verdiremedim promise'e takılıyor catch koyunca property name patlıyor view içinde
});

//order method eksik frontend öncesi buna odaklan ugurhan.order

router.post("/", async (req, res) => {
  await userService.insert(req.body);
  console.log(req.body);
  res.send(req.body);
});

router.delete("/:productId", async (req, res) => {
  await userService.removeBy("id", req.params.productId);
  res.send("OK");
});

module.exports = router;
