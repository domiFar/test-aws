//import { Database } from "./DatabaseHandler.js"

const fs = require('node:fs')

function createAccount() {
    fs.appendFile('./Database/Users.txt', content(document.querySelector("#nameInput"), document.querySelector("#passwordInput"), 0), err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Wrote into Database')
        }
      });
    // let d = new Database();
    // d.WriteIntoDatabase(document.querySelector("#nameInput"), document.querySelector("#passwordInput"), 0)
}
const content = (name, password, money) => {
    return name + password + money + ","
}