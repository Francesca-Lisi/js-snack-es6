// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 
// nelle proprietà “punti” fatti e “falli subiti”.

// Infine, creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
  {
    name: 'Barcellona',
    points: 0,
    falli: 0
  },
  {
    name: 'Real Madrid',
    points: 0,
    falli: 0
  },
  {
    name: 'Liverpool',
    points: 0,
    falli: 0
  },
  {
    name: 'Milan',
    points: 0,
    falli: 0
  },
  {
    name: 'Manchester City',
    points: 0,
    falli: 0
  },
  {
    name: 'Juventus',
    points: 0,
    falli: 0
  },
  {
    name: 'Inter',
    points: 0,
    falli: 0
  },
]


const max = 200;
function getRandomNumber(max) {
  return Math.floor(Math.random()* (max - 0 + 1) + 0)
}

const teamFalli = [];

for (let i = 0; i < teams.length; i++){
  const team = teams[i];
  team.points = getRandomNumber(max);
  team.falli = getRandomNumber(max);
  teamFalli.push({
    name: team.name,
    falli: team.falli
  })

console.log(team)
}

console.log(teamFalli)