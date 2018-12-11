use school

db.students.drop()



db.students.insert([

{
  	"StudentNo": "1",
  	"FirstName": "Mark",
  	"LastName": "Waugh",
  	"Age": "10"
},
{
  	"StudentNo": "2",
  	"FirstName": "Mark",
  	"LastName": "Matthews",
  	"Age": "16"
},
{
  	"StudentNo": "3",
  	"FirstName": "Timioty",
  	"LastName": "Waugh",
  	"Age": "10"
},
{
  	"StudentNo": "4",
  	"FirstName": "Chris",
  	"LastName": "Brown",
  	"Age": "6"
},
{
  	"StudentNo": "5",
  	"FirstName": "Tom",
  	"LastName": "Kiely",
  	"Age": "12"
}
]
)

db.students.find().pretty()

// query data 
//find first object
db.students.findOne()

//find selection
db.students.find(
{
  "StudentNo" : "2"
}
)
// $gt greater than 
db.students.find(
{
  "Age" : {$gt : "15"}
}
)

db.students.find(
{
  "Age" : {$gte : "10"}
  
}

)
//less than or equal to

db.students.find(
{
  "Age" : {$lte : "10"}
  
}

// not equal to 
db.students.find(
{
  "Age" : {$ne : "6"}
  
}

)


