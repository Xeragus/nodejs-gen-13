/**
 * Asynchronous code takes statements outside of the main program flow,
 * allowing the code after the asynchronous call to be executed
 * immediately without waiting.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 */

// simulacija na baza
const doctors = [
  {
    name: 'Boban Sugareski'
  },
  {
    name: 'Kosta Petrov'
  }
];

const getDoctors = () => {
  console.log('===== getDoctors() function called =====');

  // simulacija na zemanje na zapisi od baza
  setTimeout(() => {
    doctors.forEach(doctor => {
      console.log(`Doctor: ${doctor.name}`);
    })
  }, 1000);
};

const createDoctor = doctor => {
  console.log('===== createDoctor() function called =====');
  // simulacija na zapisuvanje vo baza
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        doctors.push(doctor);
        console.log(`Doctor created: ${doctor.name}`);
        throw new Error('hehehe');
        resolve(doctor);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

// then-catch syntax

createDoctor({
  name: 'Milenko Nedelkovski'
}).then(doctor => {
  console.log('Promise-ot ni vrati pozitivna potvrda deka e zacuvan doktorot: ', doctor);
  getDoctors();
}).catch(error => {
  console.log(error.message);
})
