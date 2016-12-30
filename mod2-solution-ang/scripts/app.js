(function (){
  'use strict';

  angular.module('Shop', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var tobuy = this;
    tobuy.toBuyList = ShoppingListCheckOffService.getItemsToBuy();
    tobuy.buyme = function(index){
      ShoppingListCheckOffService.buyme(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var bt = this;
    bt.boughtList = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var itemsBought = [];
    var itemsToBuy = [{quantity: "2", item: "Cholocate"}, {quantity: "5", item: "Cake"}, {quantity: "3", item: "Drink"},
    {quantity: "2", item: "Cookies"},{quantity: "10", item: "Crisp"}];

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
