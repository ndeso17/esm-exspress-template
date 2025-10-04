const response = (req, res, statusCode = 200, datas = {}) => {
  const success = statusCode >= 200 && statusCode < 300;
  const {
    message = success ? "Success" : "Error",
    data = null,
    error = null,
    meta = null,
  } = datas;

  return res.status(statusCode).json({
    success,
    code: statusCode,
    message,
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
    ...(data && { data }),
    ...(error && { error }),
    ...(meta && { meta }),
  });
};

export default response;
