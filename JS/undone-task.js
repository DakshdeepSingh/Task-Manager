// Function to display tasks
function displayTasks(query = "") {
    const taskContainer = document.getElementById("task_container");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskContainer.innerHTML = ""; // Clear existing content

    tasks.forEach((task, index) => {
        // Check if the task matches the search query
        if (!task.completed) {
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

        if (!task.completed) {
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
    });
}

function sortTasks() {
    const sortSelect = document.getElementById("sort");
    const sortBy = sortSelect.value;
    displaySortedTasks(sortBy);
}