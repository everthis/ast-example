/**
 * This replaces every occurrence of variable "foo".
 * usage: ./node_modules/.bin/jscodeshift -t rename.js renameTarget.js
 */
module.exports = function (fileInfo, api) {
  return api.jscodeshift(fileInfo.source)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource()
}
