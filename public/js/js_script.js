var menuItem1;
var menuItem2;
var menuItems = [];
var info;

function setup(){
  menuItem1 = new MenuItem("Fire burger", "no", "yes", 750);
  menuItem2 = new MenuItem("Homeless burger", "yes", "no", 300);
 	menuItem3 = new MenuItem("Alien burger", "no", "yes", -200);
  menuItem4 = new MenuItem("Madness Burger", "yes", "yes", 420);

	menuItems = [menuItem1, menuItem2, menuItem3, menuItem4];
}

function MenuItem(name, gluten, lactose, calories){
  this.name = name;
  this.gluten = gluten;
  this.lactose = lactose;
  this.calories = calories;

  this.Info = function(){
    var text = "The name of the burger is: " + this.name + "and the amount of calories is: " + this.calories;
    return text;
  }

}

var vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare',
    option1: 'swag'
    }

})
