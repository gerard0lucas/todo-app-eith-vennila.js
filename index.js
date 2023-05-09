window.addEventListener('load',() =>{
    const form = document.querySelector("#new-task");
    const input = document.querySelector("#input-new");
    const list = document.querySelector("#lists");

    form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert("please Enter The Task....");
            return;
        }

        const tasks = document.createElement('div');
              tasks.classList.add('tasks');
            
        const content = document.createElement('div');
              content.classList.add('content');

              list.appendChild(tasks)
              tasks.appendChild(content);

        const output = document.createElement('input');
              output.classList.add('text');
              output.type = 'text';
              output.setAttribute('readonly', 'readonly');
              output.value = task;

              content.appendChild(output);

        const action = document.createElement('div');
              action.classList.add('action');

        const edit = document.createElement('button');
              edit.classList.add('edit');
              edit.innerHTML = "edit";
              edit.addEventListener("click", (e) => {
                  if(edit.innerHTML.toLowerCase() == "edit"){
                        edit.innerHTML = "save"; 
                        output.removeAttribute('readonly');
                        output.focus();
                  }
                  else{
                        edit.innerHTML = "edit";
                        output.setAttribute("readonly","readonly") 
                  }
              })

        const del = document.createElement('button');
              del.classList.add('delete');
              del.innerHTML = "delete";
              del.addEventListener("click", (e) =>{
                  list.removeChild(tasks);
              })

              tasks.appendChild(action);
              action.appendChild(edit);
              action.appendChild(del);

            del.addEventListener('click', () =>{
                list.removeChild(tasks);
            })


    
              

        


        

        





        input.value = "";

    })



})