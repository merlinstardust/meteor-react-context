Package.describe({
  name: 'merlin:react-context',
  version: '0.9.0',
  summary: '',
  git: 'https://github.com/merlinpatt/meteor-react-context',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.addFiles('initialContext.js', 'client');
  api.mainModule('withMeteorPackages.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('merlin:react-context');
  api.mainModule('withMeteorPackages.tests.js');
});
