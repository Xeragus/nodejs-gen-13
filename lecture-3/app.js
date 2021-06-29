const players = require('./players');

players.forEach(player => {
  if (player.club == 'Arsenal') {
    player.is_favorite = true;
  }

  if (player.nationality == 'Macedonia') {
    const parts = player.name.split(' ');
    const name = parts[0];
    const lastName = parts[1];

    console.log('=================');
    console.log('*****************');
    console.log(`${name} ${lastName}: ${player.club} | Age: ${player.age}`);
    console.log('*****************');
    console.log('=================');
  }
});

console.log(players);