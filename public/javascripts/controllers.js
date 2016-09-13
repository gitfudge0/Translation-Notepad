var controllers = angular.module('mainControllers', ['ngMaterial', 'ngStorage']);

controllers.controller('writerController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
	$scope.test = 'testText';
	$scope.langs = [
		{
			short: 'fr',
			long: 'French'
		},
		{
			short: 'it',
			long: 'Italian'
		},
		{
			short: 'es',
			long: 'Spanish'
		},
		{
			short: 'ru',
			long: 'Russian'
		}
	];
	$scope.selectedlang = '';
	$scope.storage = $localStorage;
	$scope.storage.result = '';

	$scope.translate = function() {
		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-" + $scope.selectedlang + "&key=trnsl.1.1.20160610T042930Z.50c58365ac686090.6e379fa623366ecd90749c1b27cd73fef8435ee5&text=" + $scope.userinput;
		$http
			.post(url)
			.success(function(data) {
				$scope.storage.result = data.text[0];
			});
	};
}]);