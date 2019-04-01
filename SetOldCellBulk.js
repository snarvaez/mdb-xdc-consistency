load("data.js");

var bulk = db.Customers.initializeUnorderedBulkOp();

data.forEach(function(doc) {

  print("customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);

  bulk.find({"customerId": doc.customerId})
      .update({$set: {"cell": doc.OldCell}});
});

bulk.execute();