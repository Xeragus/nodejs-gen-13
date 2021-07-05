const express = require('express');
const app = express();

const people = [];

app.use(express.json());

app.get('/users', (req, res) => {
  res.send({
    message: 'This will return all people records',
    people: people
  });
})

app.post('/users', (req, res) => {
  people.push(req.body);

  res.send({
    message: 'This is all people record currently in the database',
    people: people
  });
})

app.listen(3000, () => {
  console.log('App is started on port 3000...')
});