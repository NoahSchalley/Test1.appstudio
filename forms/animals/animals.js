let myAnimals = ['dog', 'cat', 'horse', 'meerkat'] 

let newAnimal = prompt('Enter a new animal')
  let newAnimalLowerCase = newAnimal.toLowerCase()

myAnimals.push(newAnimalLowerCase)
  console.log(`The last animal is ${myAnimals[myAnimals.length-1]}`)