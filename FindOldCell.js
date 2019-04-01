load("data.js");

data.forEach(function(doc) {

  var start = Date.now();
  var customer = db.Customers
    .findOne({customerId: doc.customerId, cell: doc.OldCell });
  var total= Date.now() - start;

  if (customer) {
    print(total + " (ms) FOUND OLD CELL customerId: " + customer.customerId + " New Cell: " + customer.cell);
  } else {
    print(total + " (ms) NOT FOUND OLD CELL customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);
  }

});
