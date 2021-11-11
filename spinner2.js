// const spinner = setInterval(() => {
const spinChars = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

let delay = 100;
for (let char of spinChars) {
  setTimeout(() => process.stdout.write(char), delay);
  delay += 200;
}
setTimeout(() => console.log(""), delay);
