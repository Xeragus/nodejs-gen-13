let fun1 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      try {
        console.log('se izvrsuva prva');
        resolve();
      } catch(error){
        reject(error);
      }
    }, 5000); 
  }); 
}

let fun2 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      try {
        console.log('se izvrsuva vtora');
        resolve();
      } catch(error){
        reject(error);
      }
    },3000); 
  }); 
}

let fun3 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      try {
        console.log('se izvrsuva treta');
        resolve();
      } catch(error){
        reject(error);
      }
    },2000); 
  }); 
}

// fun1().then(()=>{
//   fun2().then(() => {
//     fun3();
//   }).catch((err) => {
//     fun3().then(() => {
        
//     }).catch((err) => {

//     })
//   })
// }).catch(error=>{
//   console.log(error)
// });

const work = async () => {
  try {
    await fun1();
    await fun2();
    await fun3();
  } catch (error) {
    console.log(error);
  }
}

console.log();
