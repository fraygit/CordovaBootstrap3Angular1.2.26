var appControllers = angular.module('appControllers', []);

appControllers.controller('loginController', ['$scope', 
	function($scope){

}]);


appControllers.controller('homeController', ['$scope', 
	function($scope){
		$scope.addNewInvitation = function(){
			$('.modalOpenInvitation').modal('show')
		};
}]);