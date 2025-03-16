document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//grabbing the form, input, and ul elements
const taskform = document.getElementById("create-task-form");
const newTaskInput = document.getElementById("new-task-description");
const unorderedTaskList = document.getElementById("tasks");
const taskpriority = document.querySelector("select");
const taskDueDate = document.getElementById("due-date");


//adding event listener to form
taskform.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents form from refreshing the page 
console.log("Form submitted");//debugging
  

//save a user input as a variable
  const userText =newTaskInput.value;
  if(userText === "")
    return;  //returns what the user entered in the textbox
  const userpriority = taskpriority.value;
  const userDate = taskDueDate.value; 


  //create a new list item
  const newTaskListed = document.createElement("li");
  newTaskListed.innerText = `${userText.trim()} - Due: ${userDate.trim() || "No Due Date"}`;
  console.log("Task List Inner HTML", newTaskListed.innerHTML);


  //set color 
switch(userpriority){
  case "High":
    newTaskListed.style.color = "red";
    break;
  case "Medium":
    newTaskListed.style.color = "yellow";
    break;
  case "Low":
    newTaskListed.style.color = "green";
    break;
  default:
    newTaskListed.style.color = "black";
    break;
}


//appeal to the new list item to unorder list
unorderedTaskList.appendChild(newTaskListed);
console.log("UL element found", unorderedTaskList);
console.log("New task listed", newTaskListed.innerText);


//create a delete button
const deleteButton = document.createElement("button");
deleteButton.innerText = "delete";

//add event listener to the delete button
deleteButton.addEventListener("click", () => {
  unorderedTaskList.removeChild(newTaskListed); //removes the list item from the unordered list
});


//append the delete button to the list item
newTaskListed.appendChild(deleteButton);


//create edit button
const editButton = document.createElement("button");
editButton.innerText = "edit";


//add event listener to the edit button
editButton.addEventListener("click", () => {
  newTaskListed.innerText = prompt("Edit your task", userText);
  if (newText !== null && newText !== "") {
    newTaskListed.innerText = `${newText.trim()} - Due: ${userDate || "No Due Date"}`;
  }
  });


  //append the edit button to the list item
  newTaskListed.appendChild(editButton);
   taskform.reset();
});