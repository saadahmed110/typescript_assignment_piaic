var admin = ["admin", "user1", "user2", "user3", "user4"];
var userinput = 'admin'; 

    for(let x of admin)
    {
        if(userinput === 'admin')
        {
            console.log('Hello Admin, Would you like to see a status report?');   
            break
        }
        else if(userinput == x )
        {
            console.log('Hello '+userinput+ ', thank you for logging in.');
            break  
        }
        else
        {
            console.log('invalid user.');
            break
        }

    }

