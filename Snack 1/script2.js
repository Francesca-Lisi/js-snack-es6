// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  {
    nome: 'Tarmac',
    peso: 7.9
  },
  {
    nome: 'Roubaix',
    peso: 8.2
  },
  {
    nome: 'Dogma',
    peso: 10.1
  },
  {
    nome: 'Aethos',
    peso: 6.9
  },
  {
    nome: 'Madone',
    peso: 7.6
  },
  {
    nome: 'Reacto',
    peso: 9.8
  },
  {
    nome: 'F7',
    peso: 8.8
  }
]


let biciLeggera = bikes[0]

// for (let i =0; i< bikes.length; i++){
//   const bike = bikes[i]
//   if(bike.peso < biciLeggera.peso){
//     biciLeggera = bike;

//   }
// }
// console.log(biciLeggera)

for (let bike of bikes){
  console.log(bike)
  if(bike.peso < biciLeggera.peso){
  biciLeggera = bike;
  }
}
console.log(biciLeggera)