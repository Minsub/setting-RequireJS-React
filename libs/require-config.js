require.config({
	//baseUrl : '/dist/js/',
	paths : {
		"react" : "libs/react15.0.1.min",
		"react-dom" : "libs/react-dom15.0.1",
		"babel" : "libs/babel-5.8.34.min",
		"jsx" : "libs/jsx",                   //See https://github.com/podio/requirejs-react-jsx
		"text" : "libs/require-text2.0.15"     //See https://github.com/requirejs/text  
	},
	shim : {
		"react" : {
			"exports" : "React"
		}
	},
	config : {
		babel : {
			sourceMaps : "inline", // One of [false, 'inline', 'both']. See https://babeljs.io/docs/usage/options/
			fileExtension : ".jsx" // Can be set to anything, like .es6 or .js. Defaults to .jsx
		}
	}
});