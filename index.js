let todos = []

const todoInput = document.getElementById('todo-input')
const addTodo = document.getElementById('add-button')

addTodo.addEventListener('click', () => {

    if (!todoInput.value) {
        alert('boş bırakma')
        todoInput.value = ''
        return false
    }

    if (todos.find(t => t.title.includes(todoInput.value))) {
        alert('bunu yapacaksın')
        todoInput.value = ''
        return false;
    }

    const newTodo = {
        title: todoInput.value
    }

    todos = [...JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : todos, newTodo]

    const li = document.createElement('li')
    li.innerHTML = todoInput.value

    document.getElementById('todo-list').appendChild(li)

    todoInput.value = ''

    localStorage.setItem('todos', JSON.stringify(todos))
})

if (localStorage.getItem('todos')) {
    const todos = JSON.parse(localStorage.getItem('todos'))

    todos.map(todo => {
        const li = document.createElement('li')
        li.innerHTML = todo.title
        document.getElementById('todo-list').appendChild(li)
    })
}