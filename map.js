//maps function 
///creates a new array
// iterates through an array
// runs a callback function for each value in the array
// Adds the results of that callback function to the new array 
//Returns the new array
// Map always returns a new array of the same length 

/*
const numbers = [32,56,3,18,5]

const negative = numbers.map(function(num){
    return num * -1;
});


const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the chicken',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cat',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out the first in my garage',
        priority: 'very high'
    },
];

const todoText = todos.map(function(todo){
    return todo.text;
});

//Using map for the DOM

const links = Array.from(document.querySelectorAll('a'));
const link = links.map(function(a){
    return a.href;
});

*/

// ------------------------------------- JS FILTER ---------------------------------

const fruits = ['apples', 'oranges', 'watermelon', 'pears', 'strawberry', 'grapes'];

const city = ['New York', 'California', 'Miami', 'Brooklyn', 'Newark', 'Boston', 'Baltimore'];

const words = ['Gym', 'RJ', 'Map', 'filter', 'why', 'dry']

// const bigWord = fruits.filter(function(fruit){
//     return fruit.length >= 9;
// })

// const smallWord = fruits.filter(function(fruit){
//     return fruit.length <= 7;
// })

// const bCity = city.filter(function(b){
//     return b[0] === 'B';
// })

// --------------------------------- no vowels -------------------------------------
const containsVowel = function(word){
    for (let char of word){
        if (isVowels(char)) return true;
    }
    return false;
}

const isVowels = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}

const containVowels = words.filter(containsVowel);

const noVowels = words.filter(function(word){
    return !containsVowel(word);
})

// -------------------------------- DOM Element with Maps and Filter -----------------------------------

 
