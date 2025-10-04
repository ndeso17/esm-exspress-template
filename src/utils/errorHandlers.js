const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  const message =
    err.message ||
    (statusCode === 404
      ? "Endpoint tidak ditemukan"
      : "Terjadi kesalahan pada server");

  console.error(`[${statusCode}] ${message}`);

  // Format sama dengan response.js
  const responseBody = {
    success: false,
    code: statusCode,
    message,
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
    error: err.stack ? err.stack.split("\n")[0] : undefined,
  };

  res.status(statusCode).json(responseBody);
};

export default errorHandler;
