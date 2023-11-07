var admin = ["admin", "user1", "user2", "user3", "user4"];
var userinput = 'admin';
for (var _i = 0, admin_1 = admin; _i < admin_1.length; _i++) {
    var x = admin_1[_i];
    if (userinput === 'admin') {
        console.log('Hello Admin, Would you like to see a status report?');
        break;
    }
    else if (userinput == x) {
        console.log('Hello ' + userinput + ', thank you for logging in.');
        break;
    }
    else {
        console.log('invalid user.');
        break;
    }
}
