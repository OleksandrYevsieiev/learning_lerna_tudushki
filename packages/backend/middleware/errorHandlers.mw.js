const {
  Sequelize: { BaseError }
} = require('sequelize');

module.exports.sequlaizeErrorHandler = (err, req, res, next) => {
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err?.status ?? 500).send({
    data: null,
    errors: [{ title: err?.message ?? 'Internal server error' }],
    meta: null
  });
};
