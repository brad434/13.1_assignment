

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

//MAP
//doubleValuesWithMap

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2;
    });
}

//valTimesIndex
//every single value is multipled by its index to give you an answer
function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    })
}

//extractKey
function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
}

//extractFullName 
function extractFullName(arr){
    return arr.map(function(element){
        return element.first + " " + element.last;
    });
}

//--------------- FILTER METHOD ---------------------

//filterByValue
function filterByValue(arr, key){
    return arr.filter(function(element){
        return element[key] !== undefined;
    });
}

//find
function find(arr, value){
    return arr.filter(function(val){
        return val === value;
    })
    [0];
}

//findInObj
function findInObj(arr,key,searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

//removeVowels
/*
function removeVow(arr){
    return arr.filter(function(val){
        const smallVal = val.toLowerCase();
        if (smallVal !== 'a' || 'e' || 'i' || 'o' || 'u'){
            return smallVal;
        };
    });
}
*/

//removeVowels
function removeVowelss(str){
    const vowelss = "aeiou";
    return str.toLowerCase().split("").filter(function(val){
        return vowelss.indexOf(val) === -1;
    }).join("");
}

//DoubleOddNumbers
function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 === 1
    }).map(function(values){
        return values * 2;
    })
}