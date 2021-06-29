const func = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
}

const func2 = () => {
  console.log('TREBA DA SE IZVRSI VTOR');
}

func().then(() => {
        console.log('TREBA DA SE IZVRSI PRV');
        func2();
      }).catch(e => {
        console.log(e);
      })

const callFunc = async () => {
  try {
    await func()
    console.log('TREBA DA SE IZVRSI PRV');
    func2();
    try {
      /**
       * 
       */
    } catch (error) {
      
    }
  } catch (err) {
    console.log(e);
  }
}

callFunc();

// async-await namesto then-catch