class Person {
  // ime, prezime, godini
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  // sakame da ima funkcija print sto kje mu gi pecati imeto, prezimeto i godinite na covekot
}

const person = new Person('Milenko', 'Nedelkovski', 49);
console.log(person);