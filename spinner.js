const spinner = setInterval(() => {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 100);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 300);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 500);

  setTimeout(() => {
    process.stdout.write("\r\\   ");
  }, 700);
}, 800);

setTimeout(() => {
  clearInterval(spinner);
  process.stdout.write("\r|   ");
  console.log("");
}, 2400);
