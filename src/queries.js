import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = Human.findByPk(2)


// Get the first animal whose species is "fish"
export const query2 = Animal.findOne({
    where: {species: 'fish'}
});

// // Get all animals belonging to the human with primary key 5
export const query3 = Animal.findAll({
    where: {humanId: 5}
})

// // Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = Animal.findAll({
    where: {birth_year: {[Op.gt]: 2015,},},
});

// // Get all the humans with first names that start with "J"
export const query5 = Human.findAll({
    where: {fname: {[Op.startsWith]: 'J'}}
});

// // Get all the animals who don't have a birth year
export const query6 = Animal.findAll({
    where: {birth_year: {[Op.is]: null}}
});

// // Get all the animals with species "fish" OR "rabbit"
export const query7 = Animal.findAll({
    where: {species: {[Op.or]: ['fish', 'rabbit']}}
});

// // Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = Human.findAll({
    where: {email: {[Op.notRegexp]: 'gmail'}}
});

// // Continue reading the instructions before you move on!

// // Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const people = await Human.findAll({ include: Animal})

    for (const person of people) {
        const pet = person.Animal
        if (pet) {
            console.log(fullName(person), pet.name, pet.species)
        }
    }
    }

// for (const emp of emps) {
//     const dept = emp.department;
//     if (dept) {
//       console.log(emp.name, dept.deptName, dept.phone);
//     } else {
//       console.log(emp.name, '-', '-');
//     }

// async function showPhoneDirectory() {
//     const emps = await Employee.findAll();
  
//     // Can't use await inside a for loop, so use forEach
//     emps.forEach(async (emp) => {
//       const dept = await emp.getDepartment();
//       if (dept) {
//         console.log(emp.name, dept.deptName, dept.phone);
//       } else {
//         console.log(emp.name, '-', '-');
//       }
//     });
//   }

// // Return a Set containing the full names of all humans
// // with animals of the given species.
// export async function getHumansByAnimalSpecies(species) {}
