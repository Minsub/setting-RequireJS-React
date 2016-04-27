# setting-RequireJS-React


A [RequireJS](http://requirejs.org)/AMD loader plugin for loading text
resources.

Known to work in RequireJS, but should work in other AMD loaders that support
the same loader plugin API.

## Docs

See the [RequireJS API text section](http://requirejs.org/docs/api.html#text).

## Latest release

The latest release is always available from [the "latest" tag](https://raw.github.com/requirejs/text/latest/text.js).

It can also be installed using [volo](https://github.com/volojs/volo):

    volo add requirejs/text

If using npm:

    npm install requirejs/text

## Usage

It is nice to build HTML using regular HTML tags, instead of building up DOM
structures in script. However, there is no good way to embed HTML in a
JavaScript file. The best that can be done is using a string of HTML, but that
can be hard to manage, particularly for multi-line HTML.

The text.js AMD loader plugin can help with this issue. It will automatically be
loaded if the text! prefix is used for a dependency. Download the plugin and put
it in the app's [baseUrl](http://requirejs.org/docs/api.html#config-baseUrl)
directory (or use the [paths config](http://requirejs.org/docs/api.html#config-paths) to place it in other areas).

You can specify a text file resource as a dependency like so:

```javascript
require(["some/module", "text!some/module.html", "text!some/module.css"],
    function(module, html, css) {
        //the html variable will be the text
        //of the some/module.html file
        //the css variable will be the text
        //of the some/module.css file.
    }
);
```
