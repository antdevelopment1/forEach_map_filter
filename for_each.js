function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
          console.log('My name is ', name);
        }
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr White'];

var suspectsList = [];

for (var i = 0; i < suspects.length; i++) {
    
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}


console.log(CreateSuspectObjects("Miss Scarlet"));
console.log(CreateSuspectObjects("Colonel Mustard"));
console.log(CreateSuspectObjects("Mr White"));