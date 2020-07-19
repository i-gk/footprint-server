const ErrorHandlerMiddleware = {
  notFound: (req, res, next) => {
    const err = {
     message: 'Oops... I cannot find that route here',
     status: 404
    };
    next(err);
  },

  generic: (err, req, res, next) => {
    if (!err) return next();

    console.log('::',err);
    res
      .set("Content-Type", "application/json")
      .status(err.status || 500)
      .send(err);
  },

};

module.exports = ErrorHandlerMiddleware;