'use strict';
angular.module('app').controller('HelloCtrl', [
    '$scope',
    '$window',
    'MyService',
    function ($scope, $window, MyService){

    // $scope.data = {
    //     name: MyService.test
    // };

    MyService.getPosts2().then(function (data) {
        $scope.data = data;
    });

    $scope.submit = function () {
        $window.alert('submit');
    };
}])
.value('MyService', {
    test: 'test',
    f: function () {
        window.console.log('im here');
    }
 })
.service('MyService', ['$http', '$q', function MyService($http, $q){
    this.test = 'test';
    this.getPosts = function () {
        var defered = $q.defer();
        $http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
            defered.resolve(data.data);
        });
        return defered.promise;
    };

    this.getPosts2 = function () {
        return $http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
            return data.data;
        });
    };
}])
.factory('MyService2', ['', function(){
    return function name(a){

    };
}])
.provider('dasd', function () {
    this.config = function (config) {

    };

    return {
            $get: ['', function(){
                return function name(a){

                };
        }]
    };
});

