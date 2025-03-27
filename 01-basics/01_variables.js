const accountId = 14455
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

// accountId = 2

accountEmail = "hcs@sj.com"
accountPassword = "2323232"
accountCity = "bihar"


console.log(accountId);

/*
Prefer not to use var
because of issue in block spcae and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])