/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID*/

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        /*db.collection('users').insertOne(
            {
                name: 'Vikram',
                age: '26',
            },
            (error, result) => {
                if (error) {
                    return console.log('Unable to insert user')
                }

                console.log(result.ops)
            }
        )*/

        /*db.collection('users').insertMany(
            [
                {
                    name: 'Jen',
                    age: 28,
                },
                {
                    name: 'Gunther',
                    age: 27,
                },
            ],
            (error, result) => {
                if (error) {
                    return console.log('Unable to insert users')
                }

                console.log(result.ops)
            }
        )*/

        /*db.collection('tasks').insertMany(
            [
                {
                    description: 'Task 1',
                    completed: true,
                },
                {
                    description: 'Task 2',
                    completed: false,
                },
                {
                    description: 'Task 3',
                    completed: true,
                },
            ],
            (error, result) => {
                if (error) {
                    return console.log('Unable to insert tasks')
                }

                console.log(result.ops)
            }
        )*/

        /*db.collection('users').findOne(
            { _id: new ObjectID('602d85833c07915566ab282a') },
            (error, user) => {
                if (error) {
                    return console.log('Unable to fetch user')
                }
                if (!user) {
                    return console.log('No user found')
                }

                console.log(user)
            }
        )*/

        /*db.collection('users')
            .find({ age: 27 })
            .toArray((error, users) => {
                console.log(users)
            })*/

        /*db.collection('users')
            .find({ age: 27 })
            .count((error, count) => {
                console.log(count)
            })*/

        /*db.collection('users')
            .updateOne(
                {
                    _id: new ObjectID('602d85833c07915566ab2829'),
                },
                {
                    $set: {
                        name: 'Wilfredo',
                    },
                }
            )
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })*/

        /*db.collection('tasks')
            .updateMany(
                { completed: false },
                {
                    $set: {
                        completed: true,
                    },
                }
            )
            .then((result) => {
                console.log(result.modifiedCount)
            })
            .catch((error) => {
                console.log(error)
            })*/

        /*db.collection('users').deleteMany({ age: 27 }, (error, result) => {
            if (error) {
                return console.log(error)
            }
            console.log(result)
        })*/

        /*db.collection('tasks')
            .deleteOne({ _id: new ObjectID('602d8d2c879a1458fdeac382') })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })*/
    }
)
