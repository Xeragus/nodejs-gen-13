// 1. File-based modules
// 2. Core modules
// 3. External modules

const events = require('events');
const emitter = new events.EventEmitter();

// listener
// koga kje se sluci nastan x, sto da napravam?
emitter.on('user_created', data => {
  console.log('Se sluci nastanot user_created');
  console.log(data);
});

// emitiranje na nastan x
emitter.emit('user_created', {
  user: 'Boban Sugareski',
  favorite_show: 'XY'
});
