const inputWindow = document.querySelector('.inputText');
const outputValue = document.querySelector('.output');
const button = document.querySelector('.button')

function findMatch(numbers) {
  let map = new Map()
  let result = [] 
  
  for (let number of numbers) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1)
    } else {
      map.set(number, 1)
    }
  }
  console.log(map)
  for (let entry of map) {
    if (entry[1] > 1) {
      result.push(entry[0])
    }
  }

  return result
}  


button.addEventListener("click", () => {
  let arr = inputWindow.value.split(',')
  outputValue.innerText = findMatch(arr)
})
