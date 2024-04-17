const express = require("express");
const router = express();
const {getApplicationStatus,getCurrentUser,updateUser} = require("../controllers/userController");
const {validateUserUpdateInput}  = require("../middleware/validationMiddleware");
const {authorizePermission,authenticateUser} = require("../middleware/authMiddleware")

router.get("/current-user",getCurrentUser);
router.get("/admin/app-stats",[authorizePermission('admin'),getApplicationStatus,]);
router.patch("/update-user",validateUserUpdateInput, updateUser);


module.exports = router;
