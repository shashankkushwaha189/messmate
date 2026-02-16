const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getMesses, createMess, deleteMess } = require("../controllers/messController");

router.get("/", auth, getMesses);
router.post("/", auth, createMess);
router.delete("/:id", auth, deleteMess);

module.exports = router;
