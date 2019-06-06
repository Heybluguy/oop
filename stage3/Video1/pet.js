class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const ernie = new Pet('dog', 1, 'pug');
const ace = new Pet('dog', 1, 'frenchie');

console.log(ernie);