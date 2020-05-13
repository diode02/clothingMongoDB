var express = require("express");
const multer = require("multer");
const sharp = require("sharp"); //for resizing photo
const auth = require("../src/middlewares/auth");
const User = require("../src/models/users/users.model");
var router = express.Router();

//get current user info by just passing JWT
router.get("/", auth, async (req, res, next) => {
  res.status(200).send(req.user);
});

//sugnup
router.post("/", async (req, res, next) => {
  const user = new User(req.body);
  try {
    const data = await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ data, token });
  } catch (error) {
    res.status(401).send(error + "");
  }
});

//edit user details
router.patch("/user", auth, async (req, res, next) => {
  const alllowedUpdates = ["name", "email", "age", "password"];
  const updates = Object.keys(req.body);
  const isvalidOrNot = updates.every((update) =>
    alllowedUpdates.includes(update)
  );

  if (!isvalidOrNot)
    return res.status(400).send({ error: "Invalid Operation" });

  try {
    //to force updating to follow our schema and not bypass our middleware we find and then change it here and then pass it from middele ware
    updates.forEach((update) => (req.user[update] = req.body[update]));
    req.user = await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error + "");
  }
});

//delete user account
router.delete("/user", auth, async (req, res, next) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error + "");
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.checkCradentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error + "");
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    console.log("1");

    req.user.tokens = req.user.tokens.filter((tok) => tok.token !== req.token);
    await req.user.save();
    res.status(200).send("Logout Successfully");
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send("");
  } catch (error) {
    res.status(500).send();
  }
});
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
      return cb(
        new Error("Please upload jpg or jpeg or png file formate only")
      );
    cb(undefined, true);
  },
});
router.post(
  "/me/avatar",
  auth,
  upload.single("upload"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({
        width: 250,
        height: 250,
      })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.status(200).send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
router.delete("/user/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.status(200).send();
});

// router.get("/me/avatar", auth, async (req, res) => {
//   if (!req.user.avatar) return res.status(404).send();
//   res.send(req.user.avatar);
// });

router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) throw new Error();
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    res.status(404).send();
  }
});
module.exports = router;
