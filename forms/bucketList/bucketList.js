let bucketList = []
  let finished = false
  let newItem = ""

while(finished == false) {
  newItem = prompt("Do you want to see list or add item?") 
  if(newItem == "add item") {
  finished = false
    item = prompt("Add a new item!")
  bucketList.push(item)
} else {
  finished = true
  }
}
  
let i = 0 

while(i < bucketList.length) {
  console.log(bucketList[i])
  i++;
}