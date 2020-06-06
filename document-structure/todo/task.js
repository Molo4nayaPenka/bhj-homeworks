'use strict'

const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');


function addTask() {
    let task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML +=`
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
    tasksList.appendChild(task);
    input.value = '';

    const removeBtn = task.querySelector('.task__remove');
    removeBtn.addEventListener('click', (event) => {
        console.log(tasksList)
        tasksList.removeChild(event.target.closest('.task'));
    });
}

input.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addTask();
    }
});





// button.addEventListener('click', addTask);

