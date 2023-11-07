var animals = [
    {
        name: "Elephant",
        description: "An elephant is the largest land mammal.",
    },
    {
        name: "Dolphin",
        description: "A dolphin is an intelligent marine mammal.",
    },
    {
        name: "Kangaroo",
        description: "A kangaroo is a marsupial from Australia.",
    },
];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal.name);
}
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log(animal.description);
}
console.log("All of these animals are mammals.");
