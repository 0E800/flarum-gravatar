var flarum = require('flarum-gulp');

flarum({
  modules: {
    'oe800/gravatar': [
      'src/**/*.js'
    ]
  }
});
