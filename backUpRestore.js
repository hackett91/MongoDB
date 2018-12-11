db.dropDatabase()

// go to shell and use mongorestore for db
mongorestore --db databaseName

//go to shell and use mongorestore for collections
mongorestore --db databaseName --collection collectionName dump/collectionName.bson

// backup database
mongodump --db databaseName
// backup collection
mongodump --db databaseName --collection collectionName