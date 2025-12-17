const { Post } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const articleId = req.params.id;

    const article = await Post.findByPk(articleId);

    if (!article) {
      return res.status(404).json({
        status: "error",
        message: "Artikel tidak ditemukan",
      });
    }

    const { title, content, category, status } = req.body;

    if (title !== undefined) article.title = title;
    if (content !== undefined) article.content = content;
    if (category !== undefined) article.category = category;
    if (status !== undefined) article.status = status;

    await article.save();

    return res.json({
      status: "Update article success",
      message: `Artikel dengan id ${articleId} berhasil diperbarui`,
      data: article,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
