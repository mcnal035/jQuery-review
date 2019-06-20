

$(document).ready(onReady);

function onReady(){
    console.log('woot!');
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flagbutton', flagTask);
    $('#clear-tasks').on('click', deleteAllTasks);
}

function addTaskHandler(event) {
    //default action when form is submitted is to refresh the page.
    // - click "submit" type button inside a <form> -
    // is to refresg the page. We want to prevent that!
    event.preventDefault();

    //console.log('clicked Add Task!');
    const taskName = $('#task-name').val();
    console.log('clicked Add Task! Task is', taskName);

    //add the task
    addTask(taskName);
    //console.log('clicked:', '.delete');
    //clear out the form field so we can enter new suff
    $('#task-name').val('');
}

function addTask(task) {
    console.log('adding the task', task);
    $('#task-list').append(`
        <li>
        ${task}
        <button class="delete">Delete</button>
        <button class="flagbutton">Flag</button>
        </li>`);
}
// Deletes item from the text.
function deleteTask(event) {
    console.log('Clicked delete', $(this).parent().text() );
    // 'this' is the delete button
    // we want to remove 
    $(this).parent().remove();
}

function flagTask(event) {
    console.log('clicked the flag button', $(this).parent().text());

    // we made a style class in the .css
    // we want to select the <li> which is the parent of ''this or the thing we clicked on
    //addClass adds css style
    //.removeClass
    //$(this).parent().addClass('important');
    $(this).parent().toggleClass('important');
}

// This will remove all tasks from the list 
function deleteAllTasks(event) {
    $('#task-list').empty();
}

// add a button
// call the button flag
// console.log when that button is clicked.