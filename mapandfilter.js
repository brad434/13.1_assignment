/*
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});
*/


/// ----------------or you can combined everything into one function ---------------------------
/*
const heading = document.querySelector('h2');
const btn = document.querySelector('button');

function extractCompletedTodos(){
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    return Array.from(allCheckboxes).filter(function(box){
        return box.checked;
    }).map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}
*/

// I was testing something out , if a button is clicked on can it print onto the h2
/*
btn.addEventListener('click', function(event){
    return heading.append(extractCompletedTodos());
    event.preventDefault();

})
*/


