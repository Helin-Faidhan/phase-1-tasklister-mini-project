document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");


  const taskList = document.getElementById("tasks")

 
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTaskInput = e.target.querySelector("#new-task-description").value
    const taskPTag = document.createElement('p')
    taskPTag.textContent = newTaskInput 
    taskList.appendChild(taskPTag)
    console.log(taskList)
    console.log(newTaskInput)
  })



});
