type ShirtSize = 'S' | 'M' | 'L' | 'XL';


function make_shirt(size: ShirtSize, message: string): void {
  console.log(`The size of the shirt is ${size} and the message printed on it is: "${message}".`);
}


make_shirt('XL', 'Rockstar');