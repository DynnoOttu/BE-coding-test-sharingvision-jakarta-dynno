const { Post } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const status = req.query.status; // optional filter

    const options = {
      attributes: [
        "id",
        "title",
        "content",
        "category",
        "status",
        "createdAt",
        "updatedAt",
      ],
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    };

    if (status) {
      options.where = { status };
    }

    const posts = await Post.findAll(options);
    const total = await Post.count(status ? { where: { status } } : {});

    return res.json({
      status: "Get artikel success",
      meta: {
        limit,
        offset,
        total,
        page: Math.floor(offset / limit) + 1,
        totalPage: Math.ceil(total / limit),
      },
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
