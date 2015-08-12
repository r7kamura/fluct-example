var marked = require('marked');
var fs = require('fs');

exports.handler = function (event, context) {
  var markdownFilePath = __dirname + '/../../README.md';
  var markdownString = fs.readFileSync(markdownFilePath, { encoding: 'utf8' });
  var responseBody = marked(markdownString);
  context.succeed(responseBody);
};
