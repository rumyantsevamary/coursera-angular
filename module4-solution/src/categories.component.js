(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/categoriesComponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
