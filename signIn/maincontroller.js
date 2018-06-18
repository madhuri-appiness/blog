app.controller('blogSignInAppCtrl', function($scope, $firebaseAuth, $location, fetchDataService) {

    $scope.usrEmail = fetchDataService.getUserEmail();

    if ($scope.usrEmail) {
        $location.path('/blog');
    }
    console.log("gg", $scope.usrEmail);
    $scope.submitSignIn = function() {
        var email = $scope.newUsrmail;
        var password = $scope.password;
        var auth = $firebaseAuth();

        auth.$signInWithEmailAndPassword(email, password).then(function() {
            console.log("login successful");

            fetchDataService.setUserEmail(email);
            $location.path('/blog');
            console.log("usr", email);

            $scope.errorMsg = false;
        }).catch(function(error) {
            $scope.errorMsg = true;
            $scope.errorMessage = error.message;
        })
    }
});