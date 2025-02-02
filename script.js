const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
function add(){
    if (inputBox.value === ''){
        alert("Write the task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let buttonGroup = document.createElement("div");
        buttonGroup.classList.add("button-group");
        
        let checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('checkTask');
        buttonGroup.appendChild(checkButton);

        checkButton.addEventListener('click', function(){
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
        })

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add('deleteTask');
        buttonGroup.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            li.remove();  
        });
        li.appendChild(buttonGroup);

        }
        inputBox.value = "";

        
        
}
inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        add();  
        event.preventDefault();  
    }
});