const RandomVarX = {
  calculate: experiment => {
    let foursArr = experiment.results.filter(num => num === 4);
    return foursArr.length;
  }
}

module.exports = RandomVarX;
