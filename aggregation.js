// aggregation - groups values from muiltiply documents together and can
// performs a where id of operations on the grouped data
// it will return a single result after the aggregation


// add field 
db.students.update({}, {$set : {"Gender": "Male"}}, false,true)

// counting 
db.students.aggregate([{$group : {_id : "$Gender", MyResult: {$sum : 1}}}])
// { "_id" : "Female", "MyResult" : 1 }
// { "_id" : "Male", "MyResult" : 2 }

// finding max
db.students.aggregate([{$group : {_id : "$Gender", MaxAge: {$max : "$Age"}}}])
//{ "_id" : "Female", "MaxAge" : null }
//{ "_id" : "Male", "MaxAge" : "16" }

//finding min
db.students.aggregate([{$group : {_id : "$Gender", MaxAge: {$min : "$Age"}}}])
//{ "_id" : "Female", "MaxAge" : null }
//{ "_id" : "Male", "MaxAge" : "10" }


