## pdxmetal

### Dev workflow

```shell
gulp
```

The above will server the app, jshint, reload on server file changes, run sass, etc.
The below will simple run the app. Since html and scss files have to be there, `gulp` has to be run atleast once previously

```shell
node app
```

To get dependencies, use:

```shell
npm install
```

### TODOS:

* add styling to prefix to have right border on small bucket
* create demo content types in gh and have home page show gh content
* make this a template with a customizeable project / db name
* have npm install and grunt data:load run after the template runs
