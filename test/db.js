const relitedb = require("../database/relitdb");


log(relitedb.get("a"))


function log(message){
    Promise.resolve(message).then(console.log);
}