function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.onclick = function() {
        this.classList.toggle("completed");
    };

    var removeButton = document.createElement("span");
    removeButton.textContent = "\u00D7";
    removeButton.className = "close";
    removeButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
