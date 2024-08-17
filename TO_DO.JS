document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add a new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Add task to the list
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        
        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
        
        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskContent.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskContent.textContent = newTaskText.trim();
            }
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskButtons.appendChild(completeBtn);
        taskButtons.appendChild(editBtn);
        taskButtons.appendChild(deleteBtn);
        
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);
    }
});
