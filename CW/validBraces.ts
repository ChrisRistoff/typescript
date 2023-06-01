export function validBraces(braces: string): boolean {
  do {
    var length = braces.length
    braces = braces.replace("()", "").replace("[]", "").replace("{}", "")
  } while (length !== braces.length)
  
  return braces.length === 0
}



const openingBraces = '({[';
const closingBraces = ')}]';

function validBraces2(braces: string) {
  const stack: string[] = [];

  for (let brace of braces) {
    const currentBrace = brace;

    if (openingBraces.includes(currentBrace)) {
      stack.push(currentBrace);
    } else if (closingBraces.includes(currentBrace)) {
      const lastOpeningBrace = stack.pop();

      if (
        !lastOpeningBrace ||
        openingBraces.indexOf(lastOpeningBrace) !== closingBraces.indexOf(currentBrace)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("()[{)}")); // false

console.log(validBraces2("(){}[]")); // true
console.log(validBraces2("([{}])")); // true
console.log(validBraces2("()[{)}")); // false
