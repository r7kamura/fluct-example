var jade = require('jade');

exports.handler = function (event, context) {
  var filePath = __dirname + '/views/index.jade';
  var responseBody = jade.renderFile(filePath);
  context.succeed(responseBody);
};
