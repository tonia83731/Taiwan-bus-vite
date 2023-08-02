export function FormatTime(input){
  // if(input.length !== 4) return "invalid input"

  const hour = input.slice(0,2)
  const min = input.slice(2)

  return `${hour} : ${min}`;
}