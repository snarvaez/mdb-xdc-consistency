load("data.js");

var bulk = db.Customers.initializeUnorderedBulkOp();

data.forEach(function(doc) {

  print("SET OLD CELL customerId: " + doc.customerId + " Old Cell: " + doc.OldCell);

  bulk.find({"customerId": doc.customerId})
      .update({$set: {"cell": doc.OldCell}});
});

var start = Date.now();
bulk.execute({w:'majority'});
var total= Date.now() - start;

print(total + " (ms) BULK majority write");
