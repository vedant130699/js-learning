const accountId = 14453;

let accountEmail = "random@google.com";

var accountPassword = "12345";
accountCity = "Pune";

// accountId = 4567; not allowed to edit const

accountEmail = "random1@gmail.com";

accountPassword = "2334326";
accountCity = "Bangluru"
console.log(accountId);


/*
Prefer not to use var
because of functional scope and block scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]) 