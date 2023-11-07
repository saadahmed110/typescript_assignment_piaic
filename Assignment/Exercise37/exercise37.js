function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The size of the shirt is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
//make_shirt();
make_shirt('M');
//make_shirt('XL', 'COOL');
