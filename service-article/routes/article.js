const express = require("express");
const router = express.Router();
const articleHandler = require("./handler/article");

router.post("/create", articleHandler.postArticle);
router.get("/", articleHandler.getArticle);
router.get("/:id", articleHandler.getArticleById);
router.delete("/:id", articleHandler.deleteArticle);
router.put("/:id", articleHandler.updateArticle);

module.exports = router;
