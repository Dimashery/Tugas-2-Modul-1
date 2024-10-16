let editIndex = -1; // Menyimpan index tugas yang sedang diedit

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim(); // Menghapus spasi di awal dan akhir
    
    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    if (editIndex === -1) {
        li.innerHTML = `<span>${task}</span> 
                        <button class="delete" onclick="removeTask(this)">Delete</button> 
                        <button class="edit" onclick="editTask(this)">Edit</button>`;
        taskList.appendChild(li);
    } else {
        taskList.children[editIndex].innerHTML = `<span>${task}</span> 
                                                    <button class="delete" onclick="removeTask(this)">Delete</button> 
                                                    <button class="edit" onclick="editTask(this)">Edit</button>`;
        editIndex = -1; // Reset index setelah mengedit
    }

    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement;
    const taskText = li.firstChild.textContent.trim(); // Ambil teks tugas
    document.getElementById('taskInput').value = taskText; // Tampilkan teks di input
    editIndex = Array.from(li.parentElement.children).indexOf(li); // Simpan index tugas yang sedang diedit
}
