var gulp = require('gulp');
var elixir = require('laravel-elixir');
var pug = require('laravel-elixir-pug');

elixir.config.sourcemaps = true;
var jsFiles = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/bootstrap/dist/js/bootstrap.js',
  './node_modules/wow.js/dist/wow.js',
  './assets/js/wordsrotator/jquery.wordrotator.js',
  './assets/js/main.js',
];
var cssFiles = [
  './node_modules/bootstrap/dist/css/bootstrap.css',
  './node_modules/wow.js/css/libs/animate.css',
  './node_modules/font-awesome/css/font-awesome.css',
  './assets/js/wordsrotator/jquery.wordrotator.css',
  './assets/css/style.css',
]
elixir(function(mix) {
    mix.scripts( jsFiles, 'assets/js/app.js')
      .styles( cssFiles, 'assets/css/app.css')
      .copy('./node_modules/font-awesome/fonts', 'assets/fonts');

    if (elixir.config.production) {
        mix.copy('assets/css/app.css', 'dist/assets/css/app.css')
            .copy('assets/js/app.js', 'dist/assets/js/app.js')
            .copy('assets/img', 'dist/assets/img')
            .copy('assets/fonts', 'dist/assets/fonts')
            .copy(['index.html'], 'dist');
    }
});
