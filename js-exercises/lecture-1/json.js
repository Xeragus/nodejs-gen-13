console.log(typeof [1, 2, 3])

let a = {
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

let result = 'Rezultat na izbori.';

// a.favorite_politicians[1] = a.favorite_politicians[1] + ' Profesorot' ;
// a.favorite_politicians[1] = a.favorite_politicians[1] + ' Profesorot';

// konkatenacija
// a.favorite_politicians[1] += ' Profesorot' + result;

// interpolacija
a.favorite_politicians[1] += ` Profesorot ${result} ${5 / 3 * 2 + 1}`;


console.log(a.favorite_politicians);
