const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');
//409
class ConflictError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.CONFLICT;
  }
}

module.exports = ConflictError;
