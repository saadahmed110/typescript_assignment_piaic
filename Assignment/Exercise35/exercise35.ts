type Animal = {
    name: string;
    description: string;
  };
  
  const animals: Animal[] = [
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
  
  
  for (const animal of animals) {
    console.log(animal.name);
  }
  
  
  for (const animal of animals) {
    console.log(animal.description);
  }
  
  
  console.log("All of these animals are mammals.");