const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ARTICLE } = process.env;

const api = apiAdapter(URL_SERVICE_ARTICLE);

module.exports = async (req, res) => {
  try {
    const article = await api.post("/article/create", req.body);
    console.log("article", article);
    return res.json(article.data);
  } catch (error) {
    console.log(error);
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
