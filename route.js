var app = angular.module("app", ['ui.router', 'firebase']);
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/signIn', {
                url: '/signIn',
                templateUrl: '../signIn/signIn.html',
                controller: 'blogSignInAppCtrl'
            })
            .state('/blog', {
                url: '/blog',
                templateUrl: '../blog/blog.html',
                controller: 'blogAppCtrl'
            })
            .state('/addBlog', {
                url: '/addBlog',
                templateUrl: '../addBlog/addBlog.html',
                controller: 'addBlogCtrl'
            })
            .state('/', {
                url: '/',
                templateUrl: '../register/register.html',
                controller: 'registerAppCtrl'
            })

        $urlRouterProvider.otherwise('/');
    }
])