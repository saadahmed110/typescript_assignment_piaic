var guests : string[] = ['Hamza', 'Hasan', 'Umais'];

console.log("I would like to invite you to dinner tonight " + guests[0])
console.log("I would like to invite you to dinner tonight " + guests[1])
console.log("I would like to invite you to dinner tonight " + guests[2])
console.log("\n");

console.log(guests[1] + " Can't come to dinner at night")
guests[1] = "Asad";
console.log("I would like to invite you to dinner tonight " + guests[0])
console.log("I would like to invite you to dinner tonight " + guests[1])
console.log("I would like to invite you to dinner tonight " + guests[2])
console.log("\n");

console.log("Hi I Found A Bigger Dinner Table");
guests.unshift("Anas")
console.log("I would like to invite you to dinner tonight " + guests[0])
console.log("I would like to invite you to dinner tonight " + guests[1])
console.log("I would like to invite you to dinner tonight " + guests[2])
console.log("I would like to invite you to dinner tonight" + guests[3])
console.log("\n");

guests.splice(2,0, "Shan")
console.log("I would like to invite you to dinner tonight " + guests[0])
console.log("I would like to invite you to dinner tonight " + guests[1])
console.log("I would like to invite you to dinner tonight " + guests[2])
console.log("I would like to invite you to dinner tonight " + guests[3])
console.log("I would like to invite you to dinner tonight " + guests[4])
console.log("\n");

guests.push("Kashan")
console.log("I would like to invite you to dinner tonight " + guests[0])
console.log("I would like to invite you to dinner tonight " + guests[1])
console.log("I would like to invite you to dinner tonight " + guests[2])
console.log("I would like to invite you to dinner tonight " + guests[3])
console.log("I would like to invite you to dinner tonight " + guests[4])
console.log("I would like to invite you to dinner tonight " + guests[5])