angular.module('ionicApp', ['ionic'])

.controller('Messages', function ($scope, $timeout, $ionicScrollDelegate) {

    // Send Message

    var alternate,
        isIOS = iconic.Platform.isWebView() && ionic.Platform.isIOS();

    $scope.sendMessage = function () {
        alternate = !alternate;

        $scope.messages.push({
            userId: alternate ? '12345' : '54321',
            text: $scope.data.message
        });
    };

    $scope.data = {};
    $scope.myId = '12345';
    $scope.messages = [];

});
