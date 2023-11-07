var admin = ["admin", "user1", "user2", "user3", "user4"];
var arraylength = admin.length;
if (arraylength == 0) {
    console.log('We got no users. We need to find some users.');
}
else {
    while (admin.length) {
        admin.pop();
    }
    console.log('We need to find some users.');
}
