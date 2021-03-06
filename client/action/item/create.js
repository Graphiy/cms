var Action = require('../../action')
var Self = function (p) {
  Action.call(this, p)
  var self = this

  self.id = 'itemCreate'
  self._label = 'Create'
  self._deny = false
  self._icon = 'fa fa-square-o'
  self.group = 'item'
}
Self.prototype = Object.create(Action.prototype)

Self.prototype._execute = function () {
  var self = this
  self.registrar.createItem()
}

module.exports = Self
