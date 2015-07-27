/* global angular, console */
(function() {
  'use strict';
  angular.module('APP')
    .controller('MainController', function($scope, PostResource, $resource) {
        PostResource.query(
              function(data) {
                $scope.posts = data;
              },
              function(err) {
                console.log(err);
              });
         //Post.query() --> GET / posts -> retorna un array de post
         //Por defecto si utilizamos query
         // $resource está configurado para que espere un array isArray = true
        $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'})
            .query(
            function(data) {
              $scope.users = data;
            },
            function(err) {
              console.log(err);
            }
        );

        $scope.removePost = function(post) {
          PostResource.delete({id: post.id}, function(data) {
            console.log(data); // Muestra si se ha realizado correctamente la petición.
          });
          // Simulo el delete con filter, no es posible borrar de jsonplaceholder
          $scope.posts = $scope.posts.filter(function(element) {
            return element.id !== post.id;
          });
        };
      })
      .controller('PostController', function($scope, PostResource, $routeParams, $location) {
        $scope.post = PostResource.get({id: $routeParams.id});
        $scope.savePost = function() {
          PostResource.update({id: $routeParams.id}, { data: $scope.post }, function(data) {
            console.log(data); // simulo el update porque no puedo modificar valores en jsonplaceholder
            // mirar el objeto data de la respuesta
            $location.path('/post/' + $scope.post.id); // Redirección a la ruta
          });
        };
      })
      .controller('NewPostController', function($scope, PostResource, $location) {
        $scope.post = {};
        //  data: {
        //      title: 'foo',
        //      body: 'bar',
        //      userId: 1
        //  }
        $scope.savePost = function() {
          PostResource.save({ data: $scope.post }, function(data) {
            console.log(data);
            $location.path('/');
          });
        };
      });
})();
