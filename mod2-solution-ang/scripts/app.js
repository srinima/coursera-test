(function (){
  'use strict';

  angular.module('Shop', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.buyme = function(index){
      ShoppingListCheckOffService.buyme(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.boughtList = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var itemsBought = [];
    var itemsToBuy = [{quantity: "2", name: "Cholocate"}, {quantity: "5", name: "Cake"}, {quantity: "3", name: "Drink"},
    {quantity: "2", name: "Cookies"},{quantity: "10", name: "Crisp"}];

    service.buyme = function(index){
      itemsBought.push(itemsToBuy[index]);
      itemsToBuy.splice(index, 1);
    }

    service.getItemsBought = function(){
      return itemsBought;
    }

    service.getItemsToBuy = function(){
      return itemsToBuy;
    }
  }

})();
