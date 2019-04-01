for i in {1..1000}
do
  ./mongo "mongodb+srv://snarvaez:<PASSWORD>@productioncluster-sg60f.mongodb.net/CustomerSingleView?retryWrites=true&writeConcern=majority&readPreference=secondary&readConcern=majority" FindOldCell.js
  sleep 5
done
