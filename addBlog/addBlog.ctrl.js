app.controller('addBlogCtrl', function($scope, $firebase, $firebaseArray, fetchDataService, $location) {
    var ref = firebase.database().ref().child('Blog');
    $scope.blog = $firebaseArray(ref);

    $scope.usrEmail = fetchDataService.getUserEmail();

    $scope.createBlog = function() {
        var title = $scope.blogTitle;
        var post = $scope.blogPost;
        var user = $scope.usrEmail;
        $scope.blog.$add({
                title: title,
                post: post,
                user: user
            },
            $location.path('/blog')).then(function(ref) {
            console.log(ref);
        }, function(error) {
            console.log(error)
        })

    }


});