import response from "../utils/response.js";

export const home = async (req, res, next) => {
  try {
    const datas = {
      message: "API is running",
      data: null,
    };
    return response(req, res, 200, datas);
  } catch (error) {
    next(error);
  }
};
