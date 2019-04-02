load("data.js");

data.forEach(function(doc) {

  var start = Date.now();

  db.Customers.findOneAndUpdate(
    {"customerId": doc.customerId},
    {$set: {"cell": doc.OldCell}},
    {w:"majority"}
  );

  var total= Date.now() - start;

  print(total + " (ms) majority write");
  print("SET OLD CELL customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);
});
