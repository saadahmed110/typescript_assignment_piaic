function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}


function make_great(magicians: string[]): string[] {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
  return magicians;
}


const magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller', 'Dynamo'];


const greatMagicians: string[] = make_great(magicians);


show_magicians(greatMagicians);
