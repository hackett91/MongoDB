// MongoDb - Projection -> project mean slection only neccessary data rather than
// selecting whle of the data of a document
// db.COLLECTION_NAME.find({},{KEY:1})

db.students.find({},{"FirstName": 1})

db.students.find({},{"FirstName": 1, "_id": 0})