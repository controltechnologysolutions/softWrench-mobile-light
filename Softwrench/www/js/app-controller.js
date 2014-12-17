angular.module('swMobile', [])
    .controller('SigninController', function ($scope, $http, $location, $log, $window) {

        //setup local dev environment
        $scope.debugMode = ($location.host() === 'localhost');
        var log = $log.getInstance('init');

        //TODO: remove test data & load form stored values
        //$scope.server = server;
        //$scope.username = 'swadmin';
        //$scope.password = 'sw@dmdfgsdfdf1n';

        $scope.signin = function () {
            log = $log.getInstance('signin');
            log.debug('enter');
            $scope.server = $window.server.value;
            $scope.username = $window.username.value;
            $scope.password = $window.password.value;
            var urlToUse = $scope.server + '/SignIn?ReturnUrl=%2fsoftwrench%2f';
            //alert(urlToUse);
            //alert($scope.username);
            //var urlToUse = 'http://10.50.100.125:8090/SW4OTB/api/generic/signin/index';
            //var urlToUse = 'http://10.50.100.125:8090/SW4OTB/api/generic/Data/UpdateAssociation';
            //var urlToUse = 'http://ip.jsontest.com/';

            $http({
                method: 'POST',
                url: urlToUse,
                data: {
                    username: $scope.username,
                    password: $scope.password
                }
            }).success(function (data, status, headers, config) {
                window.parent.document.getElementById("backButton").disabled = false;
                window.parent.document.getElementById("back").style.display = "block";
                window.location.assign('http://10.50.100.125/softwrench');

                log.info('HTTP Success', data);

            }).error(function (data, status, headers, config) {
                $scope.json = status + ' Error';

                log.info('HTTP Error', status);
            });
        };
    });