const Client = require("@replit/database");
const client = new Client("https://kv.replit.com/v0/eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk1Mzg0NjksImlhdCI6MTYxOTQyNjg2OSwiaXNzIjoiY29ubWFuIiwiZGF0YWJhc2VfaWQiOiI1YzM3YjhlNS1mZDhlLTQ2OWEtYTBiYi1kNWVlZjQzMDRhMDgifQ.QUc-6QpIDmje-UDAPmk5prThDQY6tZerjbWySp7smIFdQJ10lzt9gi5I3pU2xf420K-bzswCeuUntiiuOkcN5Q");

async function run(){
    await client.set("key", "value");
    let key = await client.get("key");
    console.log(key);
}

run()