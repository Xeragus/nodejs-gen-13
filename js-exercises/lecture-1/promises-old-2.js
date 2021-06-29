function get(url){
  return new Promise((resolve,reject)=>{
    let req = new XMLHttpRequest();
    req.open("GET", url, false);  // Zosto se napisani na pocetokot na promise i ne gi cita?
    req.send();

    req.addEventListener("load",()=>{  // Zosto dodavame event listener?; Sto e "load"?
      if(req.status<400){
        resolve(req.responseText);
      }
      else{
        reject("error");
      }
    })
    req.addEventListener("error",()=>{  // Sto e "error"?
      reject(new Error("Network error"));
    })
  })
}

get("test.json").then((response)=>{
  console.log(JSON.parse(response));
  return "a";
}).then((param)=>{
  console.log(para);
}).catch((error)=>{
  console.log(error);
})