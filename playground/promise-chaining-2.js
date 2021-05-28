require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('6078787990a3372b813c8809')
    .then((task) => {
        console.log(task)
        return Task.countDocuments({ completed: false })
    })
    .then((result) => {
        console.log(result)
    })
    .catch((e) => {
        console.error(e)
    })
