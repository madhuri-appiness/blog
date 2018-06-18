// var app = angular.module("app", ['ngRoute']);
app.service('fetchDataService', function($firebaseAuth, $location) {
    var userEmail = "";
    var auth = $firebaseAuth();

    this.getUserEmail = function() {
        if (userEmail == '') {
            userEmail = localStorage.getItem('userEmail')
        }
        return userEmail;
    }

    this.setUserEmail = function(value) {
        localStorage.setItem('userEmail', value);
        userEmail = value;
    }

    this.logOutUser = function() {
        auth.$signOut();
        console.log("logged out");
        userEmail = "";
        localStorage.removeItem('userEmail');
        $location.path('/');

    }

})