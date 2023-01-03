

//forEach DoubleValues
/*
function doubleValues(arr){
    let newArr = [];

    for (let word of arr){
        newArr.push(word * 2);
    }
    return newArr;
}
*/

//OnlyEvenValues
function OnlyEvenValues(arr){
    let newArr = [];

    arr.filter(function(val){
        if(val % 2 === 0) newArr.push(val);
    })
    return newArr;
}

//showFirstAndLast
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
    }

//addKeyAndValue

function addKeyAndValue(arr, key, value){

    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

//vowelCount
function vowelCount(str){
    let splitStr = str.split("");
    let newObj = {};
    const vowels = "aeiou";

    splitStr.forEach(function(letter){
        let lowerCasedLetter = letter.toLowerCase();

        if (vowels.indexOf(lowerCasedLetter) !== -1){
            if (newObj[lowerCasedLetter]){
                newObj[lowerCasedLetter]++;
            } else {
                newObj[lowerCasedLetter] = 1;
            }
        }
    });    
    return newObj;
};