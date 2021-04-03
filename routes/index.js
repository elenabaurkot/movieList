const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html/htmlRoutes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
