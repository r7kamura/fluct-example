var AWS = require('aws-sdk');
var dynamoDB = new AWS.DynamoDB({ region: 'us-east-1' });
var jade = require('jade');

exports.handler = function (event, context) {
  dynamoDB.getItem(
    {
      TableName: 'fluct_example_users',
      Key: {
        'id': {
          'S': '8103d5b5d22ec3046425'
        }
      }
    },
    function (error, data) {
      if (error) {
        context.fail(error);
      } else {
        var filePath = __dirname + '/views/index.jade';
        var cookies = { id: data.Item.name.S };
        var responseBody = jade.renderFile(
          filePath,
          {
            cookies: cookies,
            redirectUrl: '/production'
          }
        );
        context.succeed(responseBody);
      }
    }
  );
};
