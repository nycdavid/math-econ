const RandomVarX = require('../random_var_x.js');
const Experiment = require('../experiment.js');
const expect = require('chai').expect;

describe('RandomVarX.calculate', () => {
  it('counts the number of 4\'s in a given experiment', () => {
    let experiment = new Experiment();
    experiment.results = [3, 5, 1, 4, 4];

    let result = RandomVarX.calculate(experiment);

    expect(result).to.equal(2);
  })
});
