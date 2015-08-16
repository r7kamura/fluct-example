var AWS = require('aws-sdk');
var dynamoDb = new AWS.DynamoDB({ region: 'us-east-1' });

dynamoDb.createTable(
  {
    TableName: 'fluct_example_users',
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' },
      { AttributeName: 'name', KeyType: 'RANGE' }
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'name', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    }
  },
  function(error, data) {
    console.log([error, data]);
  }
);
