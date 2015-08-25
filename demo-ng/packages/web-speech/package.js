Package.describe({
  name: 'shmck:web-speech',
  version: '0.0.1',
  summary: 'Web Speech API Package',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating');
  api.addFiles([
    'client/speech-recorder.html',
    'client/speech-recorder.js'
  ], ['client']);
});