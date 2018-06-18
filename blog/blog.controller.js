app.controller('blogAppCtrl', function($scope, $firebaseAuth, $firebaseObject, fetchDataService, $firebase, $firebaseArray, $location) {


    $scope.userEmail = fetchDataService.getUserEmail();
    console.log("y", $scope.userEmail)
    if (!$scope.userEmail) {
        $location.path('/signIn');
    }

    var ref = firebase.database().ref().child('Blog');
    $scope.blog = $firebaseArray(ref);
    // console.log("hello", $scope.blog);
    $scope.editBlog = function(id) {
        var ref = firebase.database().ref().child('Blog/' + id);
        $scope.editBlogPost = $firebaseObject(ref);

    }

    $scope.updateBlog = function(id) {
        var ref = firebase.database().ref().child('Blog/' + id);
        // console.log("ref", ref);
        ref.update({
            title: $scope.editBlogPost.title,
            post: $scope.editBlogPost.post
        }).then(function(ref) {
            console.log(ref);
            $('#editPost').modal('hide');
        }, function(error) {
            console.log(error)
        })
    }

    $scope.deleteBlog = function(blog) {
        // console.log("blog", blog);
        $scope.deletePost = blog;
    }

    $scope.deleteBlogPost = function(deleteBlog) {
        // console.log("deleteBlog", deleteBlog);
        $scope.blog.$remove(deleteBlog);
        $('#deletePost').modal('hide');
    }
});