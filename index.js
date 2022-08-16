
function opposite(number) {
  if (number > 0) return Number(`-${number}`)
  return Math.abs(number)
}
console.log(opposite(100))
