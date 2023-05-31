export function validBraces(braces: string): boolean {
  do {
    var length = braces.length
    braces = braces.replace("()", "").replace("[]", "").replace("{}", "")
  } while (length !== braces.length)
  
  return braces.length === 0
}


console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("()[{)}")); // false
