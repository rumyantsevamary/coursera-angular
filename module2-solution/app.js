(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.checkOffItem = function (index) {
            ShoppingListCheckOffService.checkOffItem(index);
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItemsList = [
            { name: "oranges", quantity: 2 },
            { name: "carrots", quantity: 3 },
            { name: "apples", quantity: 2 },
            { name: "eggs", quantity: 10 },
            { name: "cookies", quantity: 40 }
        ];

        var alreadyBoughtList = [];

        service.checkOffItem = function (itemIdex) {
            var checkedOffItem = toBuyItemsList[itemIdex];
            toBuyItemsList.splice(itemIdex, 1);
            alreadyBoughtList.push(checkedOffItem);
        };

        service.getToBuyItems = function () {
            return toBuyItemsList;
        };

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtList;
        };
    }

})();
