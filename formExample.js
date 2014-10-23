/**
 * Created by b on 10/22/2014.
 */
angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
        $scope.master = {};
        $scope.isMadLibFormHidden = true;
        $scope.isFormHidden = false;

        $scope.generate = function(user) {
            $scope.master = angular.copy(user);
            $scope.isMadLibFormHidden = false;
            $scope.isFormHidden = true;
        };

        $scope.reset = function() {
            $scope.isMadLibFormHidden = true;
            $scope.isFormHidden = false;
        };

        $scope.clear = function(user) {
            $scope.master = {};
            $scope.user = {};
            $scope.userForm.$setPristine();
        };

        $scope.reset();
    }]);