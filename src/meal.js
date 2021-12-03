function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
    ingredients.push(item);
  }
}

function formatPrice(dollarValue) {
  return `$${dollarValue}`
}

function decreasePrice(price) {
  return price - (price * 0.1)
}

function createRecipe(title, ingredients, menuItemType) {
return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
