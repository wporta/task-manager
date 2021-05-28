const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(400).send()
        }
        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['decription', 'completed']
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    )

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Operation' })
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            console.log('Task not found')
            return res.status(404).send({ error: 'Task not found' })
        }

        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            console.log('Task not found')
            return res.status(400).send({ error: 'Task not found' })
        }
        res.send(task)
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }
})

module.exports = router
