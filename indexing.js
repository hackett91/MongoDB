use test

db.projects.find()

db.projects.find({"Discipline": "Swimming"})

db.projects.ensureIndex({"Discipline": 1})

db.projects.dropIndex({"Discipline": 1})
