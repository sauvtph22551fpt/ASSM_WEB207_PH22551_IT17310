var app = angular.module(
    'angularjs-router',
    ['ngRoute']
);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './pages/trangchu.html',
        })
        .when('/trangchu', {
            templateUrl: './pages/trangchu.html',
        })
        .when('/info', {
            templateUrl: './pages/info.html',
        })
        .when('/qlcuahang', {
            templateUrl: './pages/quanlycuahang.html',
        })
        .when('/cuahang', {
            templateUrl: './pages/cuahang.html',
        })
        .when('/404', {
            templateUrl: './pages/error.html',
        })
        .otherwise({
            redirectTo: '/404'
        })
});