// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak() {
//           console.log('My name is ', name);
//         }
//     };
// };

// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];
// var suspectsList = [];

// for (var i = 0; i < suspects.length; i++) {
    
//     suspectsList.push(CreateSuspectObjects(suspects[i]));
// }


// console.log(CreateSuspectObjects("Miss Scarlet"));
// console.log(CreateSuspectObjects("Colonel Mustard"));
// console.log(CreateSuspectObjects("Mr White"));

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {log('My name is ', name);}
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];

var suspectsList = [];

_.each(suspects, function(name) {
    let suspectObj = CreateSuspectObjects(name);
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