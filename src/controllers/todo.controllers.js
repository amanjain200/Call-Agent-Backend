const TodoService =require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');
//const TodoService = require('../services/todo.service');

const todoService = new TodoService(new TodoRepository());

function getTodos(req,res){
    const response = todoService.getAllTodos();
    return res.json({
        data: response
    })
}

function createTodo(req,res){
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({
        data: "new todo created"
    })
}

module.exports={
    getTodos,
    createTodo
}