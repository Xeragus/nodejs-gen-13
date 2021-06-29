const a = () => {
  console.log('jas sum func a');
}

const b = (cb) => {
  console.log('jas sum func b');
  cb();
}

b(() => {
  a()
});
