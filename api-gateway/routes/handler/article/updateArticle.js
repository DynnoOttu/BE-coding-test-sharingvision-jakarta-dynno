const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_ARTICLE } = process.env;

const api = apiAdapter(URL_SERVICE_ARTICLE);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await api.put(`/article/${id}`, req.body);
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
