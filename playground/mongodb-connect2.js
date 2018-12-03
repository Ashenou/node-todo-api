const {MongoClient,ObjectID} = require(`mongodb`);

MongoClient.connect(`mongodb://localhost:27017/TodoApp`,
(err,client)=>{

    if (err)
    return console.log(`wasn't able to connect`);
 
    console.log(`connected`);
 
    const db = client.db(`TodoApp`);

    db.collection(`newtable`).insertOne({
        name:`hello`,
        address:`newtableaddress`},
        (err,result)=>{
        if (err)
            return console.log(`coudln't create document `); 
        console.log(result.ops);
        console.log(new ObjectID);
        });

        db.collection(`TodoAPp`).insertOne({

        },(err,result)=>{

            if (err)
            return console.log(`error`);

            
        });

        db.collection(`Todos`).find().toArray().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
        },
        (err)=>{
            console.log(`error deteceted`,err);
        }
        )
   client.close();     
});