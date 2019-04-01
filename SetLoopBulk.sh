for i in {1..1000}
do
  ./mongo "mongodb+srv://snarvaez:<PASSWORD>@productioncluster-sg60f.mongodb.net/CustomerSingleView?retryWrites=true&writeConcern=majority&readConcern=majority" SetNewCellBulk.js
  sleep 5
  ./mongo "mongodb+srv://snarvaez:<PASSWORD>@productioncluster-sg60f.mongodb.net/CustomerSingleView?retryWrites=true&writeConcern=majority&readConcern=majority" SetOldCellBulk.js
  sleep 5
done
