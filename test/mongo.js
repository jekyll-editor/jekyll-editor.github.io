const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const credentials = fs.readFileSync(path.join(__dirname,'../key/X509-cert-5452123134605431312.pem'));
const url = 'mongodb+srv://cluster0.6m3we.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'
const option = {
  sslKey: credentials,
  sslCert: credentials
};

async function run() {
  const client = new MongoClient(url,option);
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");

    // 文档数
    console.log();
    logRowCount(collection);

    // 插入3条文档数
    await promise(collection.insertMany,collection,[{ a: 1 }, { a: 2 }, { a: 3 }]);
    logRowCount(collection);

    // 删除一条文档数
    await promise(collection.deleteOne,collection,{a:1});
    logRowCount(collection);

    // 更新一条文档数
    await promise(collection.updateOne,collection,{ a: 2 }, { $set: { b: 1 } });
    logRowCount(collection);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function logRowCount(collection){
  console.log(`当前文档总数 ${await collection.countDocuments({})}`);
}

function promise(fn,context,...args){
  fn = typeof fn == "string"?context[fn]:fn;
  return new Promise((resolve,reject)=>{
    fn.call(context,...args, function(err, result) {
      if(err){
        reject(err);
        return;
      }
      console.log(`受影响行数:${result.result.n}`)
      resolve(result);
    });
  })
}

async function insertMany(collection,args) {
  // Insert some documents
  return new Promise((resolve,reject)=>{
    collection.insertMany(args, function(err, result) {
      if(err){reject(err);return;}
      console.log(`Inserted ${result.result.n} documents into the collection , ops length ${result.ops.length}`);
      resolve(result);
    });
  })
};


async function cb2promise(fn,context,then,isFirst){
  return function (...args){
    new Promise((resolve,reject)=>{
      let cb = (...results)=>{
        resolve(then&&then(...results)||results)
      };
      if(isFirst){
        fn.call(context,cb,...args);
      }else{
        fn.call(context,...args,cb);
      }
    });
  }
}