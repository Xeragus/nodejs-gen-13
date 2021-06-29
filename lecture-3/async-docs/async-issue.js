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

const createDoctor = doctor => {
  console.log('===== createDoctor() function called =====');

  // simulacija na zapisuvanje vo baza
  setTimeout(() => {
    doctors.push(doctor);
    console.log(`Doctor created: ${doctor.name}`);
  }, 2000);
}

const getDoctors = () => {
  console.log('===== getDoctors() function called =====');

  // simulacija na zemanje na zapisi od baza
  setTimeout(() => {
    doctors.forEach(doctor => {
      console.log(`Doctor: ${doctor.name}`);
    })
  }, 1000);
};

createDoctor({
  name: 'Milenko Nedelkovski'
});

getDoctors();
