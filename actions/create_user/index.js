var AWS = require('aws-sdk');
var crypto = require('crypto');
var dynamoDB = new AWS.DynamoDB({ region: 'us-east-1' });

exports.handler = function (event, context) {
  dynamoDB.putItem(
    {
      TableName: 'fluct_example_users',
      Item: {
        id: {
          S: crypto.randomBytes(10).toString('hex')
        },
        name: {
          S: event.requestParameters.name
        },
      }
    },
    function (error, data) {
      if (error) {
        context.fail(error);
      } else {
        context.succeed('Created a new user');
      }
    }
  );
};
