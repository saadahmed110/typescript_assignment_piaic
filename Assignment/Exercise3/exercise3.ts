var person : string = "SaaD";

//for lowercase
console.log(person.toLowerCase());

//for uppercase
console.log(person.toUpperCase());

//for titlecase
function titleCase(str) 
    {
        return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }
  
  console.log(titleCase(person));
  