// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

router.post('/', createTodo);       // POST /api/todos
router.get('/', getTodos);          // GET /api/todos
router.put('/:id', updateTodo);     // PUT /api/todos/:id
router.delete('/:id', deleteTodo);  // DELETE /api/todos/:id

module.exports = router;
