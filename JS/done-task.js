// Function to display tasks
function displayTasks(query = "") {
    const taskContainer = document.getElementById("task_container");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskContainer.innerHTML = ""; // Clear existing content

    tasks.forEach((task, index) => {
        // Check if the task matches the search query
        if (task.completed) {
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

                taskBox.innerHTML = `
                    <h3>${task.title}</h3>
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

                taskContainer.appendChild(taskBox);
            }
        }
    });
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
            <h3>${task.title}</h3>
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
    }
    });
}

function sortTasks() {
    const sortSelect = document.getElementById("sort");
    const sortBy = sortSelect.value;
    displaySortedTasks(sortBy);
}