const express = require("express");
const {
  registerUser,
  authUser,
  searchUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/searchuser").post(protect, searchUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);

module.exports = router;
