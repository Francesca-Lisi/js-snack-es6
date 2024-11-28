// Scrivere una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).

// La funzione ritornerà un nuovo array con 
// i valori che hanno la posizione compresa tra i due numeri.

const arrayPrimo = [
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
//SOLUZIONE 1
// const indicePrimo = 1;
// const indiceSecondo = 4;

// function myFunction (array, a, b){
//   return arraySecondo = array.slice(a,b)
// }

// console.log(myFunction(arrayPrimo, indicePrimo, indiceSecondo))

//---------------------------------------------------------------------------
//SOLUZIONE 2
// function filterArray (min, max, array){
//   const newArray = []

//   for (let i in arrayPrimo){
//     if (i >= min && i<=max){
//       newArray.push(array[i])
//     }
//   }

//   return newArray
// }

// console.log(filterArray(1, 4, arrayPrimo))

//----------------------------------------------------------------------------
//SOLUZIONE 3
const filterArray = (array, a, b) => {
  const newArray = [];

  if (a > b) {
    newArray = null;
  } else {
  for (let i = a; i <= b; i++) 
    newArray.push(array[i]);
  }
  
  return newArray
}


console.log(filterArray(arrayPrimo, 1, 4))