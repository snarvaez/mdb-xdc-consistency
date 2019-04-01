load("data.js");

data.forEach(function(doc) {

  print("customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);

  db.Customers.findOneAndUpdate(
    {"customerId": doc.customerId},
    {$set: {"cell": doc.OldCell}}
  );
});
