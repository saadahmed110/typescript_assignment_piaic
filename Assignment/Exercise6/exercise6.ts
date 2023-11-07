var person = "     saad   ";
console.log(person);

function strip(person) 
    {
        return person.replace(/^\s+|\s+$/g, '');
    }
    console.log(strip(person));