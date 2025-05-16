const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", addTodo);
newTodoInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const newTodoText = newTodoInput.value.trim();
    if(newTodoText!==""){
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            newTodoItem.style.animation = "fadeOut 0.4s forwards";
            setTimeout(()=>newTodoItem.remove(), 350);
        });
        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTodoInput.value = "";
        newTodoInput.classList.add("input-success");
        setTimeout(()=>newTodoInput.classList.remove("input-success"), 400);
    }
}