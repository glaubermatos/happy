import express from 'express'

const app = express();

app.get('/users', function(request, response){
    const users = [
        {name: 'João', age: 32},
        {name: 'José', age: 31},
        {name: 'Pedro', age: 42},
    ]
    response.json(users);
});

app.listen(3333);