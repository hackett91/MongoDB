db.students.find()


//limit data
db.students.find({},{"StudentNo": 1,"FirstName": 1, "_id": 0}).limit(2)


//skip 
db.students.find({},{"StudentNo": 1,"FirstName": 1, "_id": 0}).skip(1)

//skip and limit
db.students.find({},{"StudentNo": 1,"FirstName": 1, "_id": 0}).skip(1).limit(1)


// sort alphabetically  -1 for decending 
db.students.find({},{"StudentNo": 1,"FirstName": 1, "_id": 0}).sort({"FirstName": 1})








