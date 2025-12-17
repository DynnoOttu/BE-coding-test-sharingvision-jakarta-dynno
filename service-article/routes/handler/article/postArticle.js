const { Post } = require("../../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: "string|min:3|empty:false",
    content: "string|empty:false",
    category: "string|optional",
    status: {
      type: "enum",
      values: ["Publish", "Draft", "Thrash"],
      empty: false,
    },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    status: req.body.status,
  };

  const createPost = await Post.create(data);

  return res.json({
    status: "success",
    data: {
      id: createPost.id,
    },
  });
};
