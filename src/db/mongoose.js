const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        },
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain word: password')
            }
        },
    },
})

// const me = new User({
//     name: '   Wilfredo   ',
//     email: 'WPORTA@Gmail.com',
//     age: 37,
//     password: 'phone098!',
// })

// me.save()
//     .then(() => {
//         console.log(me)
//     })
//     .catch((error) => {
//         console.log('Error!', error)
//     })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

const task = new Task({
    description: 'First Task',
    completed: false,
})

task.save()
    .then(() => {
        console.log(task)
    })
    .catch((error) => {
        console.log('Error:', error)
    })
