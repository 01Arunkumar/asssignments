
function duplicate(arr){
    
    let unique = [];
    
    for(let value of arr) {
        if(unique.indexOf(value) === -1) {
            unique.push(value);
        }
    }
    console.log(unique);
}

const array = [1, 2, 3, "arun",2, 3];

// calling the function
// passing array argument
duplicate(array);