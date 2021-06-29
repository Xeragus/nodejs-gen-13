// 1. dodadi funkcija koja kje prima user object i kje go dadade vo baza od korisnici
// 2. pri kreiranje na user object, neka se isprati mail do korisnikot deka uspesno se registriral

const users = [];
const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('user_registered', data => {
  console.log('Kod za isprakjanje mail', data);
});

emitter.on('user_registered', data => {
  console.log('Kod za isprakjanje sms', data);
});

const addUser = (user, x) => {
  console.log('Ova e vrednosta na x', x);
  users.push(user);
  // so emit() emituvame/ispukuvame nastan
  emitter.emit('user_registered', user);
};

addUser({
  name: "Boban",
  age: 'X'
}, 'hehe');

addUser({
  name: "Emilija"
});

addUser({
  name: "Alen"
});
