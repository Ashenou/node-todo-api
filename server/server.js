var express = require(`express`);
var bodyParser = require(`body-parser`);



var {mongoose} = require('./db/mongoose');
var {Todo} = require(`./models/todo`);
var {User} = require(`./models/user`);

var app = express();

app.use(bodyParser.json());

app.post(`/todos`, (req,res)=>{

    var todo = new Todo({
    text: req.body.text
});

todo.save().then((doc) =>{
    res.send(doc);
},(e)=>{
    res.status(400).send(e);
    });
});
app.listen(3000, () => {
    console.log(`Started on port 3000`);
});

// var newTodo = new Todo({
//     //text:`Cook dinner`
// });

// newTodo.save().then((doc)=>{

//     console.log(`Todo Saved successfully`,doc);
// },(e)=>{

//     console.log(`Unable to save todo`,e);
// });


// var newTodo2 = new Todo({
//     text:`Call Mom`,
//     completed: true,
//     completedAt:1200});

// newTodo2.save().then((doc)=>{

// console.log(`Todo Saved`,doc);
// },(e)=>{
//     console.log(`unable to save`);
// });


// var newTodo3 = new Todo({
//     text:`Call Dad`,
//     completed: true,
//     completedAt:1400
// });

// newTodo3.save().then((doc)=>{
//     console.log(`Created successfully` ,doc);
// },(e)=>{
//     console.log(`Unable to save Todo`);
// });


// //User
// //email - require -trim - string - min length 1




// var User1= new user({
//     email:``
// });

// User1.save().then((doc)=>{

//     console.log(`User saved successfully`,doc);

// },(e)=>{
//     console.log(`unable to save user`,e);
// })};