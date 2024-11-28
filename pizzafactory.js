// Array of pizza types
const pizzaTypes = [
    "Margherita",
    "Pepperoni",
    "BBQ Chicken",
    "Hawaiian",
    "Vegetarian",
    "Meat Lover's",
    "Buffalo Chicken",
    "Supreme",
    "Four Cheese",
    "Mushroom Delight",
  ];
  
  // Array of pizza toppings
  const toppings = [
    "Extra Cheese",
    "Pepperoni",
    "Olives",
    "Mushrooms",
    "Onions",
    "Bell Peppers",
    "Pineapple",
    "Bacon",
    "Chicken",
    "Sausage",
  ];

  //step 1: Let us print the arrays of pizza types and toppings
  

  //step 2: Get the array length and sizes and assign it to a variable
  let sizePizzaTypes=pizzaTypes.length; 
  let sizeToppings=toppings.length;

  //step 3: Print out the size of the arrays
  console.log(pizzaTypes);

  //step 4: manipulate the arrays and add one new pizza type and one new topping
  pizzaTypes.push("Spicy Lover's");
  toppings.push("Flaming Hot Salami");

  console.log(pizzaTypes);
  console.log(toppings);

  //Remove one pizza type and one topping from arrays and use pop method:
  pizzaTypes.pop();
  toppings.splice(9,1);

  //step 6: print out the new arrays
  console.log(pizzaTypes);
  console.log(toppings);    

  //optional: Let us create a new menu. Tip! Use for loop

  //step 7: Create random pizza types and toppings

  //step: 7-1 first create random index for pizza and toppings. Use math.random() method
  let randomPizzaTypeIndex = Math.floor(Math.random() * pizzaTypes.length);
  let randomToppingIndex = Math.floor(Math.random() * toppings.length);

  //step: 7-2 now we can create our random pizza and toppings. Let's say randomPizza and randomToppings
  let randomPizza = pizzaTypes[randomPizzaTypeIndex];
  let randomTopping = toppings[randomToppingIndex];

  //step: 7-3 display our random pizza and toppings. Tip! Use string literal ``
  console.log(`Your random pizza is ${randomPizza} with ${randomTopping}`);

  //step 8: create and order a pizza objects and toppings properties

  const newPizzaType = {
    "size": ["Large","medium","small"],
    "crust": ["thin","thick"],
    "sauce": ["tomato","barbecue"],
    "toppings": toppings,
    "price": ["150", "200", "250"]
};

