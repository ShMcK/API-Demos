Package.describe({
  name: 'shmck:giphy',
  version: '0.0.1',
  summary: 'Giphy API Package',
  git: '//github.com/ShMcK/api-demos/giffy/packages/giphy/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
    'lib/defaults.js',
    'lib/config.js',
    'lib/functions.js',
    'lib/startup.js',
    'server/giphy.js'
  ], ['server']);
  api.export('Giphy', 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('shmck:giphy');
  api.addFiles('giphy-tests.js');
});
