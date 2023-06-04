db.createUser(
    {
        user: "root",
        pwd: "secret",
        roles: [
            {
                role: "readWrite",
                db: "helpmesprint"
            }
        ]
    }
);

db = db.getSiblingDB('helpmesprint');

db.createCollection('people_collection');

db.people_collection.insertMany([
    {
        _id: 1,
        identifier: 'avnish1',
        name: 'Avnish Desai'
    },
    {
        _id: 2,
        identifier: 'scavia1',
        name: 'Charles Mhlanga'
    }
]);

db.createCollection('task_collection');

db.task_collection.insertMany([
    {
        _id: 1,
        identifier: "PA-1",
        description: "a new task"
        // ,assignee: db.people_collection.find({_id:1})
    },
    {
        _id: 2,
        identifier: "PA-2",
        description: "a second new task"
        // ,assignee: db.people_collection.find({_id:2})
    }
]);