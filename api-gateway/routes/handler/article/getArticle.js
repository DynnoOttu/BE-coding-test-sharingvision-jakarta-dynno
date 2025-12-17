const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ARTICLE } = process.env;

const api = apiAdapter(URL_SERVICE_ARTICLE);

module.exports = async (req, res) => {
  try {
    // 👉 teruskan query pagination ke article service
    const response = await api.get("/article", {
      params: req.query,
    });

    return res.json(response.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
