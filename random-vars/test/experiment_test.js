const Experiment = require('../experiment.js');
const expect = require('chai').expect

describe('Experiment', () => {
  it('has a results attribute that is an array of 6 elements', () => {
    let exp = new Experiment();
    let results = exp.results;

    expect(results.length).to.equal(6);
  });
});
