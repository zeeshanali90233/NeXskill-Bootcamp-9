let todos = [];

function addTodosToDom() {
  const todosDivRef = document.querySelector("#todos");
  //  Wipe Out
  todosDivRef.innerHTML = "";

  //   New Add
  todos.map((td) => {
    todosDivRef.innerHTML += `
<div>
    Todo: ${td}
    <button onclick="deleteTodo('${td}');">Remove</button>
</div>

    <br/>
    `;
  });
}

function deleteTodo(todoName) {
  todos = todos.filter((td) => {
    if (td !== todoName) {
      return td;
    }
  });
  addTodosToDom();
}

function addTodo() {
  const todoInputRef = document.querySelector("#todoInput");
  const todoText = todoInputRef.value;

  todos.push(todoText);
  addTodosToDom();
}
