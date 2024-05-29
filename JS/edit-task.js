function editTask(index) {
    document.getElementById("edit-popup").style.display = "block";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks[index]; // Get the task to edit
    const date = new Date();
    var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
    if (m < 10)
        m = "0" + m;
    if (d < 10)
        d = "0" + d;
    const today = y + "-" + m + "-" + d;

    document.getElementById("taskIndex").value = index; // Store the task index for later
    document.getElementsByName("edit-title")[0].value = task.title;
    document.getElementsByName("edit-duedate")[0].value = task.duedate;
    document.getElementsByName("edit-category")[0].value = task.category;
    document.getElementsByName("edit-description")[0].value = task.description;
    
    document.getElementsByName("edit-duedate")[0].setAttribute("min", today);
};

function updateTask() {
    if (confirm("Confirm submit") == true)
    {
        const taskIndex = document.getElementById("taskIndex").value; // Retrieve the task index
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTask = {
            title: document.getElementsByName("edit-title")[0].value,
            duedate: document.getElementsByName("edit-duedate")[0].value,
            category: document.getElementsByName("edit-category")[0].value,
            description: document.getElementsByName("edit-description")[0].value,
            completed: tasks[taskIndex].completed, // Maintain the completion status
        };

        // Update the specific task and save to local storage
        tasks[taskIndex] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        alert("Form Editied");
    }
    else
        alert("Form not edited");
    // Redirect back to the main task manager page after updating
    window.location.href = "main.html";
}

function closeEditForm() {
    const editPopup = document.getElementById('edit-popup');
    editPopup.style.display = 'none';
}