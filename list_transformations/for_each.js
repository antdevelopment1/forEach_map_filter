// Creates a function
function CreateSuspectObjects(name) {

    // Returns an object
    return {

        // Saves the value passed in the function about inside of a keys value
        name: name,

        // Saves the split name first index
        color: name.split(' ')[1],

        // Creates a speak function as a property in the object
        speak() {
          console.log('My name is ', name);
        }
    };
};

// Creates a list of names
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];

// Creates an empty list.
var suspectsList = [];

// Loops through list suspects
for (var i = 0; i < suspects.length; i++) {
    
    // Pushes the called function onto each inidiviual name inside suspects
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}

// Logs each object with name, color, and speak function
console.log(CreateSuspectObjects("Miss Scarlet"));
console.log(CreateSuspectObjects("Colonel Mustard"));
console.log(CreateSuspectObjects("Mr White"));

// Creates an function
function CreateSuspectObjects(name) {

    // Returns a object that contains name, the color, and a speak function
    return {
        name: name,

        // Splits the value of name into an array
        color: name.split(' ')[1],
        speak() {log('My name is ', name);}
    };
};

// Creates a list
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];

// Creates an empty list
var suspectsList = [];

// Uses _.each to loop through each suspect and calls the internal function is called passing the name parameter
_.each(suspects, function(name) {
  console.log(CreateSuspectObjects(name));
})

// Saves underscore in an empty object
const _ = {};

// Uses _.each to loop through each item in list
_.each = function(list, callback) {
  // Checks if the arr is an array. Cannot do type of because that evaluates to an object
  if (Array.isArray(list)) {

      // Loops through each item in list
      for (var i = 0; i < list.length; i++) {
        // Calls function and passes the current value, the index, and the list
        callback(list[i], i, list);
      }
  } else {

  }
}
// Uses _.each to loop through each name
_.each(["greg", "stan", "jodi"], function(name, current, list) {

    // Checks if there is a value at the current seat item + 1
  if (list[current + 1]) {

      // If there is then say who is younger than the other
      console.log(`${name} is younger than ${list[current + 1]}`);

    //    Otherwise we wind up printing the oldest
  } else {
      console.log(`${name}, is the oldest!`);
  }
});

// Uses the _.each method to pass the list value suspects and a callback function
_.each(suspects, function(name) {

    // Assings the vairbale to the function call on name value passed
    let suspectObj = CreateSuspectObjects(name);

    // Pushes into an empty array the modified value of suspectObj after having the callback function applied
    suspectsList.push(suspectObj);
});

// Creates a list with rooms inside
rooms = ["Ballroom", "Observatory", "Libray"];

// Uses _each to visit each item in the array and logs that current value to the console.
_.each(rooms, function(name) {
    console.log(name);
})

// Does the same thing as the code above but returns a value of undefined.
rooms.forEach(function(name) {
    console.log(name);
})