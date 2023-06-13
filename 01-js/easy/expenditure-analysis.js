/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  results = {}
  for (i = 0; i < transactions.length; i++) {

    category = transactions[i]['category']
    price = transactions[i]['price']

    if (results[category]) {
      results[category] += price
    }

    else {
      results[category] = price
    }
  }
  results = convertResultsToArray(results)
  return results

}



function convertResultsToArray(results) {
  results_array = []

  for (key in results) {
    obj = { category: key, totalSpent: results[key] }
    results_array.push(obj)
  }
  return results_array

}

module.exports = calculateTotalSpentByCategory;
