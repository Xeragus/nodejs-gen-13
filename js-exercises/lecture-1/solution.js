let data = {
  name: 'Boban',
  lastname: 'Sugareski',
  amount: 1500,
  credit_card: {
    id: 134234,
    name: 'xy'
  },
  is_master_user: true,
  favorite_politicians: ['Zz Motordzijata', 'Mickovski Profesorot']
}

// Napisi funkcija za dodavanje na sredno ime na gorespomenatite legendi na makedonskata politika
// Napisi vtora funkcija koja istoto kje go napravi samo za vtoriot politicar

// 1.
const addMiddleNameToAll = data => {
  for(let i = 0; i < data.favorite_politicians.length; i++) {
    const nameParts = data.favorite_politicians[i].split(' ');
    // politician = nameParts[0] + ' ' + 'XX' + nameParts[1];
    data.favorite_politicians[i] = `${nameParts[0]} XX ${nameParts[1]}`;
  }

  console.log(data.favorite_politicians);
}

// addMiddleNameToAll(data)

// 2.
const addMiddleNameToSecondPolitician = data => {
  const nameParts = data.favorite_politicians[1].split(' ');
  data.favorite_politicians[1] = `${nameParts[0]} XX ${nameParts[1]}`;

  console.log(data.favorite_politicians);
}

addMiddleNameToSecondPolitician(data);