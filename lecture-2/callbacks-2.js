const a = (cb) => {
  setTimeout(() => {
    console.log('jas sum func a');
    cb();
  }, 3000);
}

const b = () => {
  console.log('da se izvrsi posle func a');
}

a(() => {
  b();
});

