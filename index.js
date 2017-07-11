/*
 * acorn AST example
 */
const acorn = require('acorn')

const {promisify} = require('util')
const fs = require('fs')
const readFileAsync = promisify(fs.readFile)

const comments = []

const pp = function (obj) {
  return JSON.stringify(obj, null, 2)
}

const filePath = process.argv[2] || './code.js'

async function main () {
  try {
    const text = await readFileAsync(filePath, {encoding: 'utf8'})
    const ast = acorn.parse(text, {
      // collect comments in Esprima's format
      onComment: comments
    })
    console.log(pp(ast))
  } catch (err) {
    console.log('ERROR:', err)
  }
}

main()
