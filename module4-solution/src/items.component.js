(function() {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/itemsComponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
