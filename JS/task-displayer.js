function displayTasks(query = "") {
    const taskContainer = document.getElementById("task_container");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskContainer.innerHTML = ""; // Clear existing content

    tasks.forEach((task, index) => {
        // Check if the task matches the search query
        const matchesQuery =
            task.title.toLowerCase().includes(query.toLowerCase()) ||
            task.duedate.toLowerCase().includes(query.toLowerCase()) ||
            task.category.toLowerCase().includes(query.toLowerCase()) ||
            task.description.toLowerCase().includes(query.toLowerCase());

        if (matchesQuery) {
            const taskBox = document.createElement("div");
            taskBox.classList.add("task");

            // Apply the 'completed' class if the task is completed
            if (task.completed) {
                taskBox.classList.add("completed");
            }

            if (task.completed) {
                taskBox.innerHTML = `
                    <h3><s>${task.title}</s></h3>
                    <p><b>Due Date:</b> ${task.duedate}</p>
                    <p><b>Category:</b> ${task.category}</p>
                    <p><b>Description:</b> ${task.description}</p>
                `;
                // Add undo and remove buttons for completed tasks

                const undoBtn = document.createElement("button");
                undoBtn.classList.add("undo_btn");
                const undoSpan = document.createElement("span");
                undoSpan.classList.add("material-symbols-outlined");
                undoSpan.textContent = "undo";
                undoBtn.appendChild(undoSpan);
                undoBtn.onclick = () => undoTask(index);
                taskBox.appendChild(undoBtn);

                const removeBtn = document.createElement("button");
                removeBtn.classList.add("remove_btn");
                const removeSpan = document.createElement("span");
                removeSpan.classList.add("material-symbols-outlined");
                removeSpan.textContent = "delete";
                removeBtn.appendChild(removeSpan);
                removeBtn.onclick = () => removeTask(index);
                taskBox.appendChild(removeBtn);
            } else {
                taskBox.innerHTML = `
                    <h3>${task.title}</h3>
                    <p><b>Due Date:</b> ${task.duedate}</p>
                    <p><b>Category:</b> ${task.category}</p>
                    <p><b>Description:</b> ${task.description}</p>
                `;
                // Add delete, edit, and complete buttons for incomplete tasks
                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete_btn");
                const deleteSpan = document.createElement("span");
                deleteSpan.classList.add("material-symbols-outlined");
                deleteSpan.textContent = "delete";
                deleteBtn.appendChild(deleteSpan);
                deleteBtn.onclick = () => deleteTask(index);
                taskBox.appendChild(deleteBtn);

                const editBtn = document.createElement("button");
                editBtn.classList.add("edit_btn");
                const editSpan = document.createElement("span");
                editSpan.classList.add("material-symbols-outlined");
                editSpan.textContent = "edit";
                editBtn.appendChild(editSpan);
                editBtn.onclick = () => editTask(index);
                taskBox.appendChild(editBtn);

                const completeBtn = document.createElement("button");
                completeBtn.classList.add("complete_btn");
                const completeSpan = document.createElement("span");
                completeSpan.classList.add("material-symbols-outlined");
                completeSpan.textContent = "done";
                completeBtn.appendChild(completeSpan);
                completeBtn.onclick = () => completeTask(index);
                taskBox.appendChild(completeBtn);
            }
            taskContainer.appendChild(taskBox);
        }
    });
}

function undoTask(index) {
    // Retrieve tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Update the completed status of the task
    tasks[index].completed = false;

    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Redisplay tasks to reflect changes
    displayTasks();
}

function removeTask(index) {
    // Retrieve tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    // Remove the task from the tasks array and add it to the completed tasks array
    const removedTask = tasks.splice(index, 1)[0];
    completedTasks.push(removedTask);

    // Save the updated tasks arrays back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    // Redisplay tasks to reflect changes
    displayTasks();
}


// Function to complete a task
function completeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = true; // Mark the task as completed
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks list
    displayTasks(); // Refresh the task list on the page
}

// Function to delete a task
function deleteTask(index) {
    if (confirm("Confirm Deletion") == true)
    {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1); // Remove the task at the specified index
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks list
        alert("Task deleted");
    }
    else
        alert("Task not deleted");
    displayTasks(); // Refresh the task list on the page
}

// Function to search tasks
function searchTasks() {
    const searchInput = document.getElementById("task_search");
    const query = searchInput.value;
    // displayTasks(query); // Display only tasks that match the query
    displaySortedTasks(query);
}

function clearForm()
{
    document.getElementById('title-id').value = '';
    document.getElementById('duedate-id').value = '';
    document.getElementById('category-id').value = '';
    document.getElementById('desc-id').value = '';
}

// Function to submit a task
function submitForm() {
    const title = document.getElementsByName("title")[0].value;
    const duedate = document.getElementsByName("duedate")[0].value;
    const category = document.getElementsByName("category")[0].value;
    const description = document.getElementsByName("description")[0].value;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({
        title,
        duedate,
        category,
        description,
        completed: false,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the updated tasks list
    alert("Task Added");
    window.location.href = "main.html"; // Redirect back to the main page after adding the new task
}

function displaySortedTasks(sortBy = "none") {
    const taskContainer = document.getElementById("task_container");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (sortBy === "date_asc") {
        tasks.sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
    } else if (sortBy === "date_des") {
        tasks.sort((a, b) => new Date(b.duedate) - new Date(a.duedate));
    }

    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskBox = document.createElement("div");
        taskBox.classList.add("task");

        if (task.completed) {
            taskBox.classList.add("completed");
        }

        if (task.completed) {
            taskBox.innerHTML = `
                <h3><s>${task.title}</s></h3>
                <p><b>Due Date:</b> ${task.duedate}</p>
                <p><b>Category:</b> ${task.category}</p>
                <p><b>Description:</b> ${task.description}</p>
            `;
            const undoBtn = document.createElement("button");
            undoBtn.classList.add("undo_btn");
            const undoSpan = document.createElement("span");
            undoSpan.classList.add("material-symbols-outlined");
            undoSpan.textContent = "undo";
            undoBtn.appendChild(undoSpan);
            undoBtn.onclick = () => undoTask(index);
            taskBox.appendChild(undoBtn);

            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove_btn");
            const removeSpan = document.createElement("span");
            removeSpan.classList.add("material-symbols-outlined");
            removeSpan.textContent = "delete";
            removeBtn.appendChild(removeSpan);
            removeBtn.onclick = () => removeTask(index);
            taskBox.appendChild(removeBtn);
        } else {
            taskBox.innerHTML = `
                <h3>${task.title}</h3>
                <p><b>Due Date:</b> ${task.duedate}</p>
                <p><b>Category:</b> ${task.category}</p>
                <p><b>Description:</b> ${task.description}</p>
            `;
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete_btn");
            const deleteSpan = document.createElement("span");
            deleteSpan.classList.add("material-symbols-outlined");
            deleteSpan.textContent = "delete";
            deleteBtn.appendChild(deleteSpan);
            deleteBtn.onclick = () => deleteTask(index);
            taskBox.appendChild(deleteBtn);

            const editBtn = document.createElement("button");
            editBtn.classList.add("edit_btn");
            const editSpan = document.createElement("span");
            editSpan.classList.add("material-symbols-outlined");
            editSpan.textContent = "edit";
            editBtn.appendChild(editSpan);
            editBtn.onclick = () => editTask(index);
            taskBox.appendChild(editBtn);

            const completeBtn = document.createElement("button");
            completeBtn.classList.add("complete_btn");
            const completeSpan = document.createElement("span");
            completeSpan.classList.add("material-symbols-outlined");
            completeSpan.textContent = "done";
            completeBtn.appendChild(completeSpan);
            completeBtn.onclick = () => completeTask(index);
            taskBox.appendChild(completeBtn);
        }

        taskContainer.appendChild(taskBox);
    });
}

function sortTasks() {
    const sortSelect = document.getElementById("sort");
    const sortBy = sortSelect.value;
    displaySortedTasks(sortBy);
}