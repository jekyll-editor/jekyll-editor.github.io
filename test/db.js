const relitedb = require("../database/relitdb");


log(relitedb.get("key"))


function log(message){
    Promise.resolve(message).then(console.log);
}