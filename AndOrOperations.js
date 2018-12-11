use school

db.students.find()


// AND operation , 
db.students.find(
{
	
	"FirstName": "Chris", "Age": "6"
	
}
)

// OR operation
db.students.find(
{
	
	$or : [{"FirstName": "Chris"},{ "Age": "10"}]
	
}
)

// OR AND Operations
db.students.find(
{
	
	"FirstName": "Timioty", $or : [{"Age": "6"},{ "Age": "10"}]
	
}
)

