var AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB({ region: 'us-east-1' });

exports.handler = function (event, context) {
  dynamoDB.putItem(
    {
      TableName: 'lambda_test',
      Item: {
        id: {
          S: crypto.randomBytes(10).toString('hex')
        },
        user_id: {
          N: '1'
        },
      }
    },
    function (error, data) {
      if (error) {
        console.log(error);
        context.succeed('error');
      } else {
        console.log(data);
        context.succeed('done');
      }
    }
  );
};
