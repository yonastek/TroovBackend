const express = require("express");

const {
  getObjects,
  getObject,
  createObject,
  updateObject,
  deleteObject,
} = require("../controllers/objets");

const router = express.Router();

router.route("/").get(getObjects).post(createObject);

router.route("/:id").get(getObject).put(updateObject).delete(deleteObject);

module.exports = router;
