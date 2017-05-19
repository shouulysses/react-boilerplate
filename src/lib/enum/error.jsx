const ERROR_TYPE = {
  USER: 'user',
  INTERNAL: 'internal'
};

const ErrorEnum = {
  INVALID_PAYLOAD: {
    type: ERROR_TYPE.USER,
    status: 400,
    message: 'The payload is incorrect.'
  },
  INVALID_CREDENTIAL: {
    type: ERROR_TYPE.USER,
    status: 403,
    message: 'Invalid credential'
  },
  DUPLICATED_EMAIL: {
    type: ERROR_TYPE.USER,
    status: 403,
    message: 'duplicated email'
  },
  PASSWORD_NOT_MATCH: {
    type: ERROR_TYPE.USER,
    status: 403,
    message: 'password does not match'
  }
};

module.exports = ErrorEnum;
