module.exports = reviewersEditionParse

var regularExpression = require('./regular-expression')

var components = require('./numbers')

function reviewersEditionParse(argument) {
  var parsed = regularExpression.exec(argument)
  var returned = { }
  components.forEach(function(component, index) {
    var value = parsed[( index + 1 )]
    if (value !== undefined) {
      returned[component] = parseInt(value) } })
  return returned }
