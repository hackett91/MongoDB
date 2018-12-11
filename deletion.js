use school
db.students.find()

//remove specific item
db.students.remove(
{
  "_id" : ObjectId("5c0f00834be07e4b068c0d77")
}
)

// remove selected item and limit number of deletions
db.students.remove(
{
	"Age": "10"
}, 1

)