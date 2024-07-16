// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name)
    // return cats
}
destructivelyAppendCat("Ralph")
// cats.pop()
// cats.shift()
function destructivelyPrependCat(name){
  cats.unshift(name)
}
destructivelyPrependCat("Milo")
function destructivelyRemoveLastCat(){
  cats.pop()
}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
  cats.shift()
}
destructivelyRemoveFirstCat()
function appendCat(name){
  let copyCats =[...cats,name]
  return copyCats
}
appendCat("kiki")
function prependCat(name){
  let copyCats =[name,...cats]
  return copyCats}
prependCat("Arnold")
function removeLastCat(){
  let newCats = [...cats.slice(0,2)]
  return newCats
}
removeLastCat()
function removeFirstCat(){
  let newCats = [...cats.slice(1)]
  return newCats
}
removeFirstCat

console.log(removeLastCat)