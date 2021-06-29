function pecati(message) {
  console.log (message);
}

function pecatiCatch(message) {
  console.log('Ova e poraka vo catch ' + message);
}

let p = new Promise ( (resolve, reject) => {
  let a = 10;
  if ( a == 10 ) {
      resolve('success');
  }
  else {
      reject('failed');
  }
})

// p.then(pecati).catch(pecatiCatch);

p.then(message => {
  pecati(message);
}).catch(message => {
  pecatiCatch(message);
})

/**
 * Na linija 21, povikuvame funkcija p, koja vrakja promise
 * Koga vrakjame promise od nekoja funkcija, treba da se spravime so istiot
 * Vo konkretniot slucaj, se spravuvame so then-catch blok
 * Zatoa, posle povikot na funkcijata p, koja vrakja promise
 * pisuvame povik na funkcija then(), koja e nameneta da se povika
 * koga promise-ot kje bide completed, bez razlika dali e resolved, ili rejected
 * Dokolku e resolved, se povikuva then(), dokolku e rejected, se povikuva catch
 */