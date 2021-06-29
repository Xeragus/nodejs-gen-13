try {
  let a = 2 + 3;
  // .. code code code
  if (a < 10) {
    throw new Error('Provizijata e pogresno presmetana');
  }
} catch (error) {
  console.log(`Prikazi na display: ${error}`)
}
