let taskList = [];
let isEditing = false;
let currentTaskIndex = null;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    
    if (task === '') {
        alert('Please enter a task');
        return;
    }

    if (isEditing) {
        // Update the existing task if in editing mode
        taskList[currentTaskIndex].task = task;
        isEditing = false;
        currentTaskIndex = null;
    } else {
        const taskObj = {
            task: task,
            status: 'pending'
        };
        taskList.push(taskObj);
    }

    renderTasks();
    taskInput.value = ''; // Reset input field after adding/updating
    document.getElementById('addButton').innerText = 'Add'; // Reset button text
}

function renderTasks() {
    const taskBody = document.getElementById('taskBody');
    taskBody.innerHTML = '';

    taskList.forEach((taskObj, index) => {
        const tr = document.createElement('tr');

        const tdTask = document.createElement('td');
        tdTask.textContent = taskObj.task;
        tdTask.classList.add('task-text');

        const tdStatus = document.createElement('td');
        const statusSpan = document.createElement('span');
        statusSpan.classList.add('status');
        statusSpan.textContent = taskObj.status;
        statusSpan.classList.add(taskObj.status === 'pending' ? 'pending' : 'completed');
        tdStatus.appendChild(statusSpan);

        const tdActions = document.createElement('td');
        tdActions.classList.add('actions');

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '✏️';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteTask(index);

        tdActions.appendChild(editBtn);
        tdActions.appendChild(deleteBtn);

        tr.appendChild(tdTask);
        tr.appendChild(tdStatus);
        tr.appendChild(tdActions);

        taskBody.appendChild(tr);
    });
}

function editTask(index) {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = taskList[index].task; // Set the input box with the current task value
    isEditing = true;
    currentTaskIndex = index;
    document.getElementById('addButton').innerText = 'Update'; // Change button text to 'Update'
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}
