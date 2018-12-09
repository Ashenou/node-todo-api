const {MongoClient,ObjectID} = require(`mongodb`);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`,(err,client)=>{

if (err){
    return console.log(`Couldn't connect to db`,err);
}
console.log(`connected Server`);
const db = client.db(`TodoApp`);

db.collection(`Todos`).insertOne({
    text:`Something to do`,
    completed:false
},(err,result)=>{
    if (err){
        return console.log(`Couldn't insert todo`,err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
});

db.collection(`Users`).insertOne({
    name:`Diesel2`,
    age:257,
    location:`Ottawa,ON`
},(err,result)=>{
    if(err){
        console.log(`Couldn't add it`,err);
    }
    console.log(result.ops);
}
);

db.collection(`Users`).find({name:`Diesel`}).toArray().then((docs)=>{
    console.log(docs)},
    (err)=>{
    console.log(`unable to fetch data`,err);
});
db.collection(`Users`).find({name:`Diesel`}).count().then((count)=>{
    console.log(`number of diesels ${count}`)},
    (err)=>{
    console.log(err);
});

db.collection(`Todos`).deleteMany({name:`have dinner`}).then(
    (res)=>{
        console.log(res);
    },
    (err) =>{
        console.log(err);
    });
client.close();
});
