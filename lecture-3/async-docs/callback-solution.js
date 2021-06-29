/**
 * Asynchronous code takes statements outside of the main program flow,
 * allowing the code after the asynchronous call to be executed
 * immediately without waiting.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 * Also read: https://github.com/airbnb/javascript  
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
    });
  }, 1000);
};

const createDoctor = (doctor, cb) => {
  console.log('===== createDoctor() function called =====');

  // simulacija na zapisuvanje vo baza
  setTimeout(() => {
    doctors.push(doctor);
    console.log(`Doctor created: ${doctor.name}`);
    cb();
  }, 2000);
};

createDoctor({
  name: 'Milenko Nedelkovski'
}, getDoctors);
