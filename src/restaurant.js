function createRestaurant(resName) {
  var restaurant = {
    name: resName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };

  return restaurant
}

function addMenuItem(restaurant, foodItem) {

  if(foodItem.type === "lunch"
    // instead of using comparison !== true, use logical NOT (!)
    && !restaurant.menus.lunch.includes(foodItem)) {
    restaurant.menus.lunch.push(foodItem)
  } else if(foodItem.type === "breakfast"
    && !restaurant.menus.breakfast.includes(foodItem)) {
    restaurant.menus.breakfast.push(foodItem)
  } else if(foodItem.type === "dinner"
    && !restaurant.menus.dinner.includes(foodItem)) {
    restaurant.menus.dinner.push(foodItem)
  }
}


function removeMenuItem(restaurant, foodName, menuName) {
  if (menuName === "breakfast") {
    // find the index & store the index in a variable
    console.log(`breakfast is an array of objects: ${restaurant.menus.breakfast}`);
    console.log(`this is the parameter: ${foodName}`);
    console.log(`this is the name of the first menu item in the breakfast array: ${restaurant.menus.breakfast[0].name}`);
    // findIndex passes in a function
    // Two ways to accomplish this. One way is to store the function in a variable, then call the function
    // var findFood = food => food.name === foodName
    // var foodIndex = restaurant.menus.breakfast.findIndex(findFood)
    // 2nd way is call find Index on the array and pass in the function using arrow function
    console.log(restaurant.menus);
    var foodIndex = restaurant.menus.breakfast.findIndex(food => food.name === foodName)
    // the arrow function has a implicit return
    console.log(foodIndex);
    console.log(`this is the index: ${foodIndex}`)
    // remove the food item from breakfast
    restaurant.menus.breakfast.splice(foodIndex, 1)
    console.log(restaurant.menus)
    // return an interpolated string
    return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`
    } else if(menuName === "lunch") {
      var foodIndex = restaurant.menus.lunch.findIndex(food => food.name === foodName)
      restaurant.menus.lunch.splice(foodIndex, 1);
      console.log(restaurant.menus.lunch)
      return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`
    } else if (menuName === "dinner") {
      var foodIndex = restaurant.menus.dinner.findIndex(food => food.name === foodName)
      restaurant.menus.dinner.splice(foodIndex, 1);
      console.log(restaurant.menus.dinner)
      return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`
  } else {
    return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
  }
  // return `No one is eating our ${foodName} - it has been removed from the ${menuName} menu!`
}







module.exports = {
createRestaurant,
addMenuItem,
removeMenuItem
}
