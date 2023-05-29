export function reverseWords(str: string): string {
  let splitStr = str.split(' ');
  for (let word of splitStr) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    str = str.replace(word, reverseWord);
  }

  return str;
}

const str = 'hello world';
console.log(reverseWords(str));
