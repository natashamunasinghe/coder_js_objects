// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
// Use code to add an array of hobbies to your me object
// Use code to delete your age key
// Iterate through me.hobbies and log each hobby to the screen


let me = {};

me = {
    "age": "36",
    "current_location": "sydney"
};

console.log(me);

//add array
me["hobbies"] = [ "tennis", "waterpolo", "hockey"];

console.log(me);

//set function

me.farewell = function() { alert("Bye everybody!"); }

me.farewell()

//delete object

delete me.age;

//iterate through each array item of hobbies
console.log(me.hobbies);

let array = me.hobbies;

for (i = 0; i < array.length; i++) { 
    console.log(array[i]);
}


