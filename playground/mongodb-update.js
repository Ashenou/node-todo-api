const {MongoClient,ObjectID} = require(`mongodb`);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`,(err,client)=>{

if (err){
    return console.log(`Couldn't connect to db`,err);
}
console.log(`connected Server`);
const db = client.db(`TodoApp`);


db.collection(`Todos`).findOneAndUpdate({
    _id: new ObjectID('5c0482eab460423e4c2bee90')},
    {$set:{completed:true}},
    {returnOriginal:false}).
    then((result)=>{
    console.log(result);})
    
    db.collection(`Users`).findOneAndUpdate({name:`Diesel5`},
    {$set:{name:`Diesel7`},
    $inc:{age:1}},
    {returnOriginal:false}).then((result)=>{
        console.log(result);
    });
});
