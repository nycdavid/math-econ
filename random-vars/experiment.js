function Experiment() {
  this.results = [];

  for (var i = 0; i < 6; i++) {
    let num = randomIntBetween(1, 6);
    this.results.push(num);
  }
}

function randomIntBetween(min, max) {
  let randomFactor = Math.random(); // value between 0 and 1
  let range = max - min + 1;
  return Math.floor(randomFactor * range) + min;
}

module.exports = Experiment;
