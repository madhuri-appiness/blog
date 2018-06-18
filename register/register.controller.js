app.controller('registerAppCtrl', function($scope, $firebaseAuth, $state, fetchDataService) {

    $scope.submitSignUp = function() {
        var email = $scope.newUsrmail;
        var password = $scope.password;
        if (email && password) {
            var auth = $firebaseAuth();
            auth.$createUserWithEmailAndPassword(email, password).then(function() {
                fetchDataService.setUserEmail(email);
                $state.go('/blog');
                console.log("User Created");

            }).catch(function(error) {
                $scope.errorMsg = true;
                $scope.errorMessage = error.message;
            })
        }
    }

    $scope.logOut = fetchDataService.logOutUser();
});