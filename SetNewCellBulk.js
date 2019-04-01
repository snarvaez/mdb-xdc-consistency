load("data.js");

var bulk = db.Customers.initializeUnorderedBulkOp();

data.forEach(function(doc) {

  print("customerId: " + doc.customerId + " Old Cell: " + doc.OldCell + " New Cell: " + doc.NewCell);

  bulk.find({"customerId": doc.customerId})
      .update({$set: {"cell": doc.NewCell}});
});

bulk.execute();
