let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() 
{
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) 
        {
        const task = 
        {
            id: Date.now(),
            date: new Date().toISOString(),
            text: taskText
        };
        
        tasks.push(task);
        saveTasks();
        displayTasks();
        taskInput.value = '';
    }
}

function deleteTask(id) 
{
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks();
}

function saveTasks() 
{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() 
{
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => 
        {
        const li = document.createElement('li');
        li.textContent = `${new Date(task.date).toLocaleString()} - ${task.text}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(task.id);
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

displayTasks();