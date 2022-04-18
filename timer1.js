const timer = (timeArray) => {
  let inputs = process.argv.slice(2);
  if (inputs.length === 0) {
    return;
  }
  const filtered = inputs
    .filter((num) => num > 0)
    .sort(function (a, b) {
      return a - b;
    });

  for (let element of filtered) {
    setTimeout(() => {
      process.stdout.write(".");
    }, element * 1000);
  }
};

timer();
