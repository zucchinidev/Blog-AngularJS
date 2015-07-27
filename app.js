/* global angular*/
(function() {
  'use strict';
  var app = angular.module('APP', ['lumx', 'ngResource', 'ngRoute']);
  app.config(configRoute);

  function configRoute($routeProvider) {
    $routeProvider
        .when('/', {
          controller: 'MainController',
          templateUrl: 'templates/home.html'
        })
        .when('/post/:id', {
          controller: 'PostController',
          templateUrl: 'templates/post.html'
        })
        .when('/posts/new', {
          controller: 'NewPostController',
          templateUrl: 'templates/post_form.html'
        })
        .when('/post/edit/:id', {
          controller: 'PostController',
          templateUrl: 'templates/post_form.html'
        });
  }
})();

