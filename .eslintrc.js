module.exports = {
	"env": {
		"browser": true,
		"node"   : true,
		"amd"    : true
	},
	"globals": {
		"Constants": false,
		"ENV"      : false
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	"rules": {
		"no-console" : 0,
	}
}