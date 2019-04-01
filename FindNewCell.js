load("data.js");

data.forEach(function(doc) {

  var start = Date.now();
  var customer = db.Customers
    .findOne({customerId: doc.customerId , cell: doc.NewCell});
  var total= Date.now() - start;

  if (customer) {
    print(ms + " (ms) FOUND NEW CELL customerId: " + customer.customerId + " New Cell: " + customer.cell);
  } else {
    print(ms + " (ms) NOT FOUND NEW CELL customerId: " + doc.customerId + " New Cell: " + doc.NewCell);
  }

});
