Package.describe({
  name: 'pierreeric:fview-slidedeck',
  summary: 'Famo.us Slide Deck',
  version: '1.0.0',
  git: 'https://github.com/PEM--/MeetupFamousSlides'
});

Package.onUse(function(api) {
	// Meteor Core Packages
  api.use([
  	'underscore@1.0.1',
  	'coffeescript@1.0.4',
  	'templating@1.0.9'
	], 'client');

  // Atmosphere packages
	api.use([
		'mquandalle:jade@0.2.8',
		'iron:router@1.0.0',
		'gadicohen:famous-views@0.1.19'
	], 'client');

	// Package files
  api.addFiles([
  	'lib/fview-slidedeck.js',
  	'lib/fview-slidedeck.jade',
  	'lib/fview-slidedeck.coffee',
  	'lib/layout.jade',
  	'lib/layout.coffee',
  	'lib/routing.coffee',
  	'lib/css-styles.coffee'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pierreeric:fview-slidedeck');
  // TODO :)
});
