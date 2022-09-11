const todo_form =document.querySelector("#todo_form")
const todo_list = document.querySelector("#todo_list")
const todo_input = document.querySelector("#todo_form input")


let todos=[];

function remove_todo(event){
    const li = event.target.parentElement
    const remove_id = li.id
    console.log(li.id)
    li.remove()
    todos = todos.filter(todo => todo.id !==parseInt(li.id)); 
    save_todos()
}

function save_todos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function paint_todo(new_todo) {
    const li = document.createElement("li");
    li.id = new_todo.id
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    span.innerText = new_todo.text;
    li.appendChild(button);
    button.innerText = '❌'
    todo_list.appendChild(li)
    button.addEventListener("click",remove_todo)
}

function handlertodoform(event){
    event.preventDefault();
    const new_todo = todo_input.value;
    const new_todo_obj = {text:new_todo,id:Date.now()}
    todo_input.value = "";
    todos.push(new_todo_obj); 
    paint_todo(new_todo_obj);
    save_todos();
}

todo_form.addEventListener("submit",handlertodoform)

const saved_todos = localStorage.getItem("todos");
if (saved_todos) {
    const parsed_todos = JSON.parse(saved_todos)
    todos = parsed_todos
    // parsed_todos.forEach((item) => {todos.push(item)})
    parsed_todos.forEach((item) => {paint_todo(item)})
    }
else {
    todos=[]
};