// console.log('destructuring');

// const person = {
//   name: 'Brian',
//   age: 23,
//   location: {
//     city: 'Serra',
//     temp: 26
//   }
// };
// /*const name = person.name;
// const age = person.age;*/
// const { name: f = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// if (city && typeof temperature === 'number') {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, priceS, priceM, priceL] = item;
console.log(`A medium ${coffee} costs ${priceM}`);
