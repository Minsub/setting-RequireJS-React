# setting-RequireJS-React
React의 JSX를 RequireJS를 사용해 모듈화하는 기본 세팅.

RequireJS만 사용시 react의 JSX로 만들어진 파일을 가져올때 문법오류가 나기 때문에 부가적인 plug-in 세팅이 필요.

[Webpack](https://webpack.github.io/), [browserify](http://browserify.org/) 와 같은 Module Bundler 사용하지 않고 browser레벨에서 사용 항 수 있도록 세팅.

참조: [requirejs-react-jsx](https://github.com/podio/requirejs-react-jsx)


# Usage

### Setup
`index.html`

HTML에서 기본 세팅을 require와 require-config만 설정

```html
<!DOCTYPE html>
<html>
<head lang="ko">
    <meta charset="UTF-8">
    <title>RequireJS-React Test</title>
</head>
<body>
    <div id="test1"></div>
    <div id="test2"></div>
    <!-- RequireJS -->
    <script type="text/javascript" src="libs/require2.2.0.js"></script>
    <!-- RequireJS Config -->
    <script type="text/javascript" src="libs/require-config.js"></script>
    <!-- Main Script-->
    <script type="text/javascript" src="main.js"></script>
</body>
</html>
```



`require-config.js`

require설정 파일.

require.cinfig에서 설정된 기본 paths에 react, babel, plug-in일 기본 세팅함

```js
require.config({
	//baseUrl : '/dist/js/', // base location
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
```



`App.js`

jsx파일, define을 통해 모듈화 가능.

CommonsJS방식을 통해 사용. (Navigation.jsx는 AMD방식으로 표현)

```js
// @App.jsx
define(function(require){

  var React = require('react');
  var ReactDOM = require('react-dom');

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, RequireJS-React-Test!</p>
          </div>
        );
      }
    });
  }

  App.prototype.init = function () {
    ReactDOM.render(<this.AppView />, document.getElementById("test1"));
  };

  return App;

});
```



`main.js`

require함수로 module을 불로오는데 jsx파일을 앞에 jsx!을 붙히면 자동으로 require.config에서 설정한 세팅인 .jsx파일 읽는다.

```js
require(['jsx!view/Navigation','jsx!view/App'], function(Navigation, App){
  "use strict";
  
  var navi = new Navigation();
  navi.render(document.getElementById("test2"));
  
  var app = new App();
  app.init();
}, function(error) {
	console.log("EEROR: "+error)
});
```

