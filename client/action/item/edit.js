var Action = require('../../action')
var Self = function (p) {
  Action.call(this, p)
  var self = this

  self.id = 'itemEdit'
  self._label = 'Edit'
  self._icon = 'fa fa-pencil-square-o'
  self.group = 'item'
  self.registrar.selection.on('change', self.evaluate.bind(self, self.registrar.selection))
}
Self.prototype = Object.create(Action.prototype)

Self.prototype._execute = function () {
  var self = this
  var keys = self.registrar.selection.getAll()
  self.registrar.editItem(keys[0])
}

Self.prototype.evaluate = function (selection) {
  var self = this
  if (selection.getCount()) self.enable()
  else self.disable()
}

module.exports = Self
