module.exports = {
	"env": {
		"browser": true,
		"node"   : true,
		"es6"    : true
	},
	"globals": {
		"Constants": false,
		"ENV"      : false
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"parser": "babel-eslint"
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	"rules": {
		"no-console" : 0,
	}
}