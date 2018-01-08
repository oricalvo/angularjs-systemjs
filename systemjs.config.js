SystemJS.config({
    separateCSS: true,
    map: {
        "angular": "node_modules/angular/angular.js",
        "css": "node_modules/systemjs-plugin-css/css.js",
        "text": "node_modules/systemjs-plugin-text/text.js",
    },
    packages: {
        "app": {
            defaultExtension: 'js',
        }
    },
    meta: {
        "*.html": {
            loader: "text",
        },
        "*.css": {
            loader: "css",
        },
        "angular": {
            format: "global",
            exports: "angular",
        }
    }
});

