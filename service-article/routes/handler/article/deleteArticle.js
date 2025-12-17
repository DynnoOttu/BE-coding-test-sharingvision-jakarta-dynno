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

    await article.destroy();
    // await article.save();

    return res.json({
      status: "Delete article success",
      message: `Artikel dengan id ${articleId} berhasil dihapus`,
      data: article,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
