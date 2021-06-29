const points = [
  [[12, 14], [7, 4]],
  [[14, 10], [3, 3]],
  [[15, 8], [3, 7]],
  [[11, 9], [4, 5]],
  [[13, 11], [5, 6]],
  [[15, 10], [5, 8]]
]

// Podatoci za kosarkarski natprevari
// [[12, 14], [7, 4]]
// tim 1: 12 dvojki, 7 trojki
// tim 2: 14 dvojki, 4 trojki

/**
 * Za site natprevari da go napisete tocniot broj na poeni po tim, vkupniot broj na poeni i
 * koj pobedil: domakjinot ili gostinot
 * Primer output:
 * ******************
 * Domakjin pobedil
 * Domakjin 78:74 Gostin
 * Vkupno poeni 152
 * * ******************
 * Gostin pobedil
 * Domakjin 88:90 Gostin
 * Vkupno poeni ...
 */
// 1 niza od 2 nizi
// tie 2 nizi, imaat po 2 elementi
// [[12, 14], [7, 4]], 
// [12, 14] kje bide niza[0]
// [7, 4] kje bida niza[1]
// 12 kje bide niza[0][0]

points.forEach((game) => {
  const hostPoints = game[0][0] * 2 + game[1][0] * 3;
  const awayPoints = game[0][1] * 2 + game[1][1] * 3;

  console.log("*********");
  // ternary operator
  // condition ? firstThing : secondThing
  console.log(`${hostPoints > awayPoints ? 'Domakjinot' : 'Gostinot'} pobedil`);
  console.log(`Domakjin ${domakjninPoints}: ${gostinPoints} Gostin`);
  console.log(`Vkupno poeni:${domakjninPoints + gostinPoints}`);
  
  // DRY: Don't Repeat Yourself

  // if (domakjninPoints > gostinPoints) {
  //   console.log("*********");
  //   console.log("domakjin pobedil");
  //   console.log(`Domakjin ${domakjninPoints}: ${gostinPoints} Gostin`);
  //   console.log(`Vkupno poeni:${domakjninPoints + gostinPoints}`);
  // }
  // if (gostinPoints > domakjninPoints) {
  //   console.log("*********");
  //   console.log("Gostin pobedil");
  //   console.log(`Domakjin ${domakjninPoints}: ${gostinPoints} Gostin`);
  //   console.log(`Vkupno poeni:${domakjninPoints + gostinPoints}`);
  // }
});