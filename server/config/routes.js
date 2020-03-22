const tasks = require('../controllers/tasks.js')
module.exports = function(app){
    app.get('/tasks', (req, res) => {
        tasks.index(req, res);
    });
    app.get('/tasks/:id', (req, res) => {
        tasks.show(req, res);
    });
    app.post('/createTask', (req, res) => {
        tasks.createTask(req, res);
    });
    app.post('/tasks/:id', (req, res) => {
        tasks.update(req, res);
    });
    app.delete('/tasks/:id', (req, res) => {
        tasks.destroy(req, res);
    });
}