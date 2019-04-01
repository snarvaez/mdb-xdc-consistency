load("data.js");

data.forEach(function(doc) {

  var start = Date.now();
  var customer = db.Customers
    .findOne({customerId: doc.customerId, cell: doc.OldCell });
  var total= Date.now() - start;

  if (customer) {
    print("customerId: " + customer.customerId + " Old Cell: " + customer.cell + " ms: " + total);
  } else {
    print("NOT FOUND customerId: " + doc.customerId + " Old Cell: " + doc.OldCell + " ms: " + total);
  }

});
