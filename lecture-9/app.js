const express = require('express');
const app = express();

const people = [
  {
    id: 1,
    name: 'Bobz'
  },
  {
    id: 2,
    name: 'Meto'
  }
];

// 1. Route parameter
// facebook.com/kosta_petrov
// facebook.com/boban_sugareski
// facebook.com/ignat_ivanov69
// app.get('/:username', (req, res) => {
//   res.send(req.params.username);
// })

// 2. Query parameter
// youtube.com?video=123098120398123091283091283012&video_size=12312312&name=poasdkadsp

// users?name=Boban

app.use(express.json());

app
  .get('/users', (req, res) => {
    let filteredUsers = people;

    if (req.query.name) {
      filteredUsers = people.filter(user => user.name == req.query.name);
    }

    res.send({
      message: 'This will return all people or filtered records if query param exists',
      people: filteredUsers
    });
  })
  // the cool way of doing:
  // .get('/users', (req, res) => {
  //   if (req.query.name) {
  //     let filteredUsers = people.filter(user => user.name == req.query.name);
  //     res.send({
  //       message: 'This will return all people or filtered records if query param exists',
  //       people: filteredUsers
  //     });
  //   } else {
  //     res.send({
  //       message: 'This will return all people or filtered records if query param exists',
  //       people: people
  //     });
  //   }
  // })
  .get('/users/:id', (req, res) => {
    const person = people.filter(data => data.id == req.params.id)

    // longer version
    // const person = people.filter((data) => {
    //   if (data.id == req.params.id) {
    //     return data;
    //   }
    // })

    res.send({
      message: 'This is the person with id ' + req.params.id,
      person: person
    });
  })
  .post('/users', (req, res) => {
    req.body.id = people.length + 1;
    people.push(req.body);

    res.send({
      message: 'This is all people record currently in the database',
      people: people
    });
  })

app.listen(3000, () => {
  console.log('App is started on port 3000...')
});