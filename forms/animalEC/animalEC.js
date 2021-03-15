myAnimals = ['dog', 'cat', 'horse', 'meerkat'] 

newAnimal = prompt('Enter a new animal')
  newAnimalLowerCase = newAnimal.toLowerCase()

myAnimals.push(newAnimalLowerCase)
  console.log(`The last animal is ${myAnimals[myAnimals.length-1]}`)