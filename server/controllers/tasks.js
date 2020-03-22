const Task = require('../models/task.js')
module.exports = {
    index: function(req, res) {
        console.log("Testing")
        Task.find()
            .then(data => res.json({tasks: data}))
            .catch(err => res.json(err));
    },

    createTask: function(req, res) {
        const task = new Task();
        task.title = req.body.title;
        task.description = req.body.description;
        task.save()
            .then(task => console.log(task))
            .catch(err => console.log(err));
    },

    show: function(req, res) {
        Task.findOne({_id: req.params.id})
        .then(data => res.json({task: data}))
        .catch(err => res.json(err));
    },

    update: function(req, res) {
        Task.findOne({_id: req.params.id})
            .then(a => {
                a.title = req.body.title,
                a.description = req.body.description
                a.save()
                    .then(a => res.json(a))
                    .catch(err => res.json(err));
            })
            .catch(err => res.json(err));
    },
    
    destroy: function(req, res) {
        Task.findOne({_id: req.params.id})
            .then(b => {
                b.remove()
                    .then(b => res.json(b))
                    .catch(err => res.json(err));
            })
            .catch(err => res.json(err));
    }
};