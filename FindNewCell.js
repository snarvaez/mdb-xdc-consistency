load("data.js");

data.forEach(function(doc) {

  var start = Date.now();
  var customer = db.Customers
    .findOne({customerId: doc.customerId , cell: doc.NewCell});
  var total= Date.now() - start;

  if (customer) {
    print("customerId: " + customer.customerId + " New Cell: " + customer.cell + " ms: " + total);
  } else {
    print("NOT FOUND customerId: " + doc.customerId + " New Cell: " + doc.NewCell + " ms: " + total);
  }

});
