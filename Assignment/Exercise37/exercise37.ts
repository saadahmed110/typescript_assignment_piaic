type ShirtSize = 'S' | 'M' | 'L' | 'XL';


function make_shirt(size: ShirtSize = 'L', message: string = 'I love TypeScript'): void {
  console.log(`The size of the shirt is ${size} and the message printed on it is: "${message}".`);
}


//make_shirt();


make_shirt('M');


//make_shirt('XL', 'COOL');