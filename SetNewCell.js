load("data.js");

data.forEach(function(doc) {

  print("customerId: " + doc.customerId + " Old Cell: " + doc.OldCell + " New Cell: " + doc.NewCell);

  db.Customers.findOneAndUpdate(
    {"customerId": doc.customerId},
    {$set: {"cell": doc.NewCell}}
  );
});
