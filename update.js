duse school

db.students.find()

// where {}    set: {}
db.students.update(
{"_id" : ObjectId("5c0f00834be07e4b068c0d76")},{$set : {"Age": "15"}}
)

// where clause then set (only updates one)
db.students.update(
{"Age": "16"},{$set : {"LastName": "Rainsford"}}
)


// updates multiple documents
db.students.update(
{"Age": "10"},{$set : {"LastName": "Rainsford"}}, {multi : true}
)


// updates multiple documents
db.students.update(
{"LastName": "Rainsford"},{$set : {"LastName": "Thompson"}}, {multi : true}
)


db.students.save(
{

    "_id" : ObjectId("5c0f00834be07e4b068c0d73"),
    "StudentNo" : "1",
    "FirstName" : "Mark",
    "LastName" : "Hackett",
    "Age" : "10"
}
)
