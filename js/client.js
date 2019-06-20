console.log('Good Morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Sam', 'Adam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady); // adds content to the page. (DOM Document Object Model)
// .ready is a jQuery event and lets the document know that it is ready to run the function.
// its important not to call the function like $(function onReady()); just call the name onReady. 
// Keep this at the to as good practice. 
// Function onReady takes the information from jQuery bling and puts that onto Dom. when DOM is ready.
function onReady() {
    renderStudentList(playfair);
}

// This functionwilltake in an array of students,
// loop the our students & display then on the DOM.
// Function renderStudentList takes the information from the array and puts into to the renderStudent then moves to the on ready. loops
function renderStudentList(studentList) { //student list will allow you to pass the playfair array into it in the onReady function.
    for (student of studentList) {
        renderStudent(student);
    }
}
//This function will take in a single student,
//and append it to the '#student' id on the HTML page.
//  this function of renderStudentList onto the DOM through onReady.  
function renderStudent(student) {
    $('#students').append(`<li>${student}</li>`); // makes the list of names a listed.
}