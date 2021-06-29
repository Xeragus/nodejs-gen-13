let func = Promise.resolve('hehehe');

func().then().catch()

const workFunc = async () => {
  await func()
}

workFunc()