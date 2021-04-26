const Client = require("@replit/database");
const client = new Client();

async function run(){
    await client.set("key", "value");
    let key = await client.get("key");
    console.log(key);
}

run()