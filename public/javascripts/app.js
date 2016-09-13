var app = angular.module('myApp', [
	'ngMaterial',
	'ngRoute',
	'mainControllers'
]);

app.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue');

	$routeProvider.
		when('/', {
			templateUrl: 'writer.html',
			controller: 'writerController'
		});
}]);