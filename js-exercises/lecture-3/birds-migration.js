// let birdsData = [1, 4, 4, 4, 5, 3, 3, 3, 8, 8, 8, 8, 4, 3];
let birdsData = [1, 4, 4, 4, 5, 3];
let sightingsData = {}

// [1, 4, 4, 4, 5, 3, 3, 3, 8, 8, 8, 8];
/**
 * data = {}
 * iteracija 1
 * birdTypeId = 1
 * dali birdTypeId postoi vo data?
 * => ne postoi, znaci dodadi go vo objektot data
 * i zapisi deka e viden ednas
 * na krajot na prvata iteracija, data kje izgleda vaka
 * data = { '1': 1 }
 * 
 * iteracija 2
 * birdTypeId = 4
 * dali birdTypeId postoi vo data?
 * => ne postoi, znaci dodadi go vo objektot data
 * i zapisi deka e viden ednas
 * na krajot na vtorata iteracija, data kje izgleda vaka
 * data = { '1': 1, '4': 1 }
 * 
 * iteracija 3, 4
 * birdTypeId = 4
 * dali birdTypeId postoi vo data?
 * => postoi, znaci zgolemi go brojot na pati koj taa
 * ptica e videna
 * na krajot na cetvratata iteracija, data kje izgleda vaka
 * data = { '1': 1, '4': 3 }
 * 
 * iteracija 5
 * birdTypeId = 5
 * dali birdTypeId postoi vo data?
 * => ne postoi, znaci dodadi go vo objektot data
 * i zapisi deka e viden ednas
*/

birdsData.forEach(birtTypeId => {
  // proveruvame dali birtTypeId vekje postoi vo data
  // dokolku postoi, zgolemi ja vrednosta pod toj kluc za 1
  // dokolku ne postoi, dodadi go vo objektot data
  if (birtTypeId in sightingsData) {
      sightingsData[birtTypeId] = sightingsData[birtTypeId] + 1;
  } else {
      sightingsData[birtTypeId] = 1
  }
});

let maxNumberOfSightings = 0;

for (const key in sightingsData) {
  if(sightingsData[key] > maxNumberOfSightings) {
    maxNumberOfSightings = sightingsData[key];
  }
}
console.log(sightingsData);
console.log(maxNumberOfSightings);

let maxSightingsKeys = [];

for (const key in sightingsData) {
  if(sightingsData[key] == maxNumberOfSightings) {
    maxSightingsKeys.push(key);
  }
}

console.log(maxSightingsKeys);

// edinstveno sto ni ostanuva e da najdeme minimalen element
// na nizata maxSightingsKeys

let minId = Math.min(); // + beskonecnost
maxSightingsKeys.forEach(key => {
  if(parseInt(key) < minId) {
    minId = parseInt(key)
  }
})

console.log('Pticata so najmalo id koe e videna najmnogu pati e pticata so id', minId);