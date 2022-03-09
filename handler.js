'use strict';

const querystring = require('querystring')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hola mundo desde Serverless',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `UserName: ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  const body = querystring.parse(event["body"])
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Petición para crear usuarios',
        input: `Hola ${body.user}`,
      },
      null,
      2
    ),
  };
};

