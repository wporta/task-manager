require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')

/*
User.findByIdAndUpdate('60aec3caed636b5af91c8dc6', { age: 1 })
    .then((user) => {
        console.log(user)
        return User.countDocuments({ age: 1 })
    })
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.log(e)
    })*/

/*
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age,
    })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('60aec3caed636b5af91c8dc6', 9)
    .then((count) => {
        console.log(count)
    })
    .catch((e) => {
        console.log(e)
    })
*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60aec408ed636b5af91c8dca')
    .then((count) => {
        console.log(count)
    })
    .catch((e) => {
        console.log(e)
    })
