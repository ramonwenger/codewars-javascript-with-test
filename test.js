import validParentheses from './main.js';
import mocha from 'mocha';
import chai from 'chai';
import {describe} from 'mocha';
//const assert = require ('assert');

describe("Tests", () => {
  it("test", () => {
    mocha.assert.equals(validParentheses( "()" ), true);
    mocha.assert.equals(validParentheses( "())" ), false);
  });
});
