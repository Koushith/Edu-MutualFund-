//  this is a custom middleware where we define custom errors. soon after hitting this route next will -> run next middleware

const notFound = (req, res, next) => {
  const error = new Error(`not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 2000 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: 'development' === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
