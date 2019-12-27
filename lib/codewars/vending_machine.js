// vending machine by adrian.eyre

/**
 * [VendingMachine description]
 * @param       {Array} items array of obj properties include name, code, quantity, price
 * @param       {Number} money total money in tnhe machine
 * @constructor
 */
class VendingMachine {

  constructor(items, money) {
    this.items = items;
    this.money = money;
  };

  vend (selection, itemMoney){
    let selectionObject = this.items.filter(item => item.code === selection.toUpperCase()).pop();

    // vending problems
    if (!selectionObject) { return 'Invalid selection! : Money in vending machine = ' + this.money.toFixed(2) }
    if (selectionObject.price > itemMoney) { return "Not enough money!"; }
    if (selectionObject.quantity === 0) { return selectionObject.name + ": Out of stock!"; }

    // adjust item quantity
    this.items.forEach(item => {
      if (item.code === selectionObject.code) { item.quantity -= 1 }
    });

    // adjust money
    this.money = this.money + selectionObject.price;

    // vend
    let change = itemMoney - selectionObject.price;
    if (change) {
      return "Vending " + selectionObject.name + " with " + change.toFixed(2) + " change.";
    } else {
      return "Vending " + selectionObject.name;
    }

  };
};

module.exports = VendingMachine;
