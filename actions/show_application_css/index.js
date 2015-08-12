var fs = require('fs');

exports.handler = function (event, context) {
  var cssPath = __dirname + '/application.css';
  var responseBody = fs.readFileSync(cssPath, { encoding: 'utf8' });
  context.succeed(responseBody);
};
