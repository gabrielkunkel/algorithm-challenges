const VendingMachine = require('../../lib/codewars/vending_machine');

describe('Vending Machine activity', function() {

  beforeEach(function() {
    let items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:0, price:0.25}];

    vendingMachine = new VendingMachine(items, 1000);
  });

  it('should say not enough money if not given enough', function(){
    expect(vendingMachine.vend("A01", 0.50)).toEqual('Not enough money!');
  });

  it('gives out-of-stock for 0 quantity item', function(){
    expect(vendingMachine.vend("A04", 100)).toEqual("Freddo: Out of stock!");
  });

  it('gives item and change', function(){
    expect(vendingMachine.vend("A02", 1)).toEqual("Vending Caramac Bar with 0.40 change.");
  });

  it('just gives item when no change', function() {
    expect(vendingMachine.vend("A02", 0.60)).toEqual("Vending Caramac Bar");
  });

  it('responds to an invalid selection', function() {
    expect(vendingMachine.vend("A05", 1.25)).toEqual("Invalid selection! : Money in vending machine = 1000.00");
  });

  it('updates the quantity of an item when dispensed', function() {
    vendingMachine.vend("A01", 0.60);
    let selectedObject = vendingMachine.items.filter(item => item.code === "A01").pop();
    expect(selectedObject.quantity).toBe(9);
  });

  it('updates the amount of money in the vending Machine', function() {
    vendingMachine.vend("A01", 0.60);
    expect(vendingMachine.money).toBe(1000.60);
  });

  it('selects correct item with case insensitive code', function() {
    expect(vendingMachine.vend("a02", 0.60)).toEqual("Vending Caramac Bar");
  });

});

describe('Different Vending Machine, same items', function(){

  beforeEach(function() {
    let items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:0, price:0.25}];

    vendingMachine = new VendingMachine(items, 11.20);
  });

  it('responds to an invalid selection', function() {
    expect(vendingMachine.vend("A05", 1.25)).toEqual("Invalid selection! : Money in vending machine = 11.20")
  });

  it('should respond with invalid selection no change to Money in machine', function() {
    expect(vendingMachine.vend("Z01", 0.41)).toEqual("Invalid selection! : Money in vending machine = 11.20");
  });

  it('works with repeated selections that are valid, no change', function() {
    vendingMachine.vend("A01", 0.60);
    vendingMachine.vend("A02", 0.60);
    expect(vendingMachine.vend("Z01", 0.41)).toEqual("Invalid selection! : Money in vending machine = 12.40");
  });

});
