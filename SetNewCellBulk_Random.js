function getRnd(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

function updateCustomerCell(sample, iterations) {

  for (i= 0; i < iterations; i++) {

    var bulk = db.Customers.initializeUnorderedBulkOp();

    db.Customers.aggregate([
      { $sample:    { size: sample } },
      { $project:   { _id:0, customerId: 1, cell: 1}}
    ]).forEach(function(doc) {

      var oldCell = doc.cell;
      var newCell = getRnd(1111111111, 9999999999);

      print("SET NEW CELL customerId: " + doc.customerId + " Old Cell: " + oldCell + " New Cell: " + newCell);

      bulk.find({"customerId": doc.customerId})
          .update({$set: {"cell": newCell}});
    });

    bulk.execute();
  }
}

// Update 200 customers
updateCustomerCell(20, 10);
