var undoing = require('css-undoing')
var parse = require('css-parse')

module.exports = Checker;

function Checker (css) {
    if (!(this instanceof Checker)) {
        return new Checker(css)
    }

    this.css = css
    this.ast = parse(css)
}

Checker.prototype.check = function () {
    var ret = undoing.check(this.css)

    if (!ret) {
        console.log('Undoing Style!!')
    }
}
