const express = require("express");
const router = express.Router();

const articleHandler = require("./handler/article");

router.post("/article", articleHandler.article);
router.get("/article", articleHandler.getArticle);
router.get("/article/:id", articleHandler.getArticleById);
router.put("/article/:id", articleHandler.updateArticle);
router.delete("/article/:id", articleHandler.deleteArticle);

module.exports = router;
