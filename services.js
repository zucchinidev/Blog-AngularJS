/* global angular */

/**
 * Este servicion me permite poder gestionar el resource que se utiliza en varios lugares
 * en un único lugar, así si tenemos que cambiar algo, solo lo hacemos aquí
 */


(function() {
  'use strict';
  angular.module('APP')
      .factory('PostResource', function($resource) {
        return $resource('http://jsonplaceholder.typicode.com/posts/:id',
            {id: '@id'}, { update: { method: 'PUT' }}
        );
      });
})();
