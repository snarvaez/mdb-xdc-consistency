db.getMongo().setSlaveOk()
db.getMongo().setReadPref('nearest');

load("data.js");

data.forEach(function(doc) {

  var start = Date.now();

  var cursor = db.Customers
    .find({customerId: doc.customerId, cell: doc.OldCell })
    .readConcern("linearizable");

  var total= Date.now() - start;

  if (cursor[0]) {
    print(total + " (ms) FOUND OLD CELL");
    print("customerId: " + cursor[0].customerId + " New Cell: " + cursor[0].cell);
  } else {
    print(total + " (ms) NOT FOUND OLD CELL");
    print("customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);
  }

});
