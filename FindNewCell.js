db.getMongo().setSlaveOk()
db.getMongo().setReadPref('nearest');

load("data.js");

data.forEach(function(doc) {

  var start = Date.now();

  var cursor = db.Customers
    .find({customerId: doc.customerId , cell: doc.NewCell})
    .readConcern("linearizable").maxTimeMS(10000);

  var total= Date.now() - start;

  if (cursor[0]) {
    print(total + " (ms) FOUND NEW CELL");
    print("customerId: " + cursor[0].customerId + " New Cell: " + cursor[0].cell);
  } else {
    print(total + " (ms) NOT FOUND NEW CELL");
    print("customerId: " + doc.customerId + " New Cell: " + doc.NewCell);
  }

});
