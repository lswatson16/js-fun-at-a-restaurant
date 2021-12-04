function takeOrder(orderNum, deliveryOrders) {
 if (deliveryOrders.length < 3) {
   return deliveryOrders.push(orderNum)
 }
}

function refundOrder(orderNum, deliveries) {
  // find the index of the orderNum passed in
  for (var i = 0; i < deliveries.length; i++) {
    if(orderNum === deliveries[i].orderNumber) {
      deliveries.splice(i, 1);
    }
  }
}

function listItems(orders) {
  var listItems = []
  for (var i = 0; i < orders.length; i++) {
    // test loop by logging "Hello"
    // console.log("Hello");
    // push each item into an array
    listItems.push(orders[i].item);
  }
  // convert the array to a string using an array method
  // use a separator as an argument to the join method
  return listItems.join(', ')
}

function searchOrder(orders, orderItem) {
  var tempList = [];
  for (var i = 0; i < orders.length; i++) {
    tempList.push(orders[i].item)
  }
  
  if(tempList.includes(orderItem)) {
    return true
  } else {
    return false
  }
}

module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
};
