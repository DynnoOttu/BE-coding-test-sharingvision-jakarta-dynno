const { Post } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const articleId = req.params.id;

    const article = await Post.findByPk(articleId, {
      attributes: [
        "id",
        "title",
        "content",
        "category",
        "status",
        "createdAt",
        "updatedAt",
      ],
    });

    if (!article) {
      return res.status(404).json({
        status: "error",
        message: "Artikel tidak ditemukan",
      });
    }

    return res.json({
      status: "Get article by id success",
      data: article,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
