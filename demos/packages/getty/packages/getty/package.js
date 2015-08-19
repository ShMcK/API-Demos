Package.describe({
  name: 'shmck:giphy',
  version: '0.0.1',
  summary: 'Getty API Package',
  git: '//github.com/ShMcK/api-demos/getty/packages/getty/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles([
    'lib/defaults.js',
    'lib/config.js',
    'lib/functions.js',
    'lib/startup.js',
    'server/getty.js'
  ], ['server']);
  api.export('Getty', 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('shmck:giphy');ƒ
  api.addFiles('giphy-tests.js');
});
