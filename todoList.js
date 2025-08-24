let todolist = [];

todolist =  JSON.parse(localStorage.getItem("track")) || []; // No need to write an if statement;

update_list();

function update_list(){
    let todoListhtml = '';
    // Generating HTML
        for(let i = 0; i <todolist.length; i++){
            const toDo = todolist[i];
            todoListhtml += `
            <div class="todo-row">
            <span class="todo-name">${toDo.name}</span>
            <span class="todo-date">${toDo.date}</span>
            <button class="delete" onclick="Delete(${i})">Delete</button>
        </div>
        `;
        }
      localStorage.setItem("track",JSON.stringify(todolist));
      document.querySelector('.list').innerHTML = todoListhtml;
}

function Delete(i){

    todolist.splice(i, 1);
    update_list();

}

function add_todo(){
       let inp = document.querySelector('.inp');
       let d = document.querySelector('.Date');
       let todo = inp.value;
       todo = inp.value.trim();   
       let Date = d.value;
       
       if(todo!=="" && Date!== ""){
       todolist.push({name: todo, date: Date});
       console.log(todolist);
       update_list();
    }
    inp.value = "";
    d.value = "";
} 

function enter(event){
    if (event.key === 'Enter'){
        add_todo();
    }
}
