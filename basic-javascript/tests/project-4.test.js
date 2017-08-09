const sinon = require('sinon');
const assert = require('chai').assert;
const funcs = require('../src/project-4.js');


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4 functions', () => {
  describe('multiplyArguments', () => {
    it('Should be a function', () => {
      const multiplyArguments = funcs.multiplyArguments;
      assert.isFunction(multiplyArguments);
    })
    it('should multiply arguments passed to the function', () => {
      const multiplyArguments = funcs.multiplyArguments;
      assert.equal(multiplyArguments(3, 4, 6), 72);
    })
  })
  describe('invokeCallback', () => {
    it('Should be a function', () => {
      const invokeCallback = funcs.invokeCallback;
      assert.isFunction(invokeCallback);
    });
    it('should invoke a callback function', () => {
      const invokeCallback = funcs.invokeCallback;
      const spy = sinon.spy();
      invokeCallback(spy);
      sinon.assert.calledOnce(spy);
    })
  })
  describe('sumArray', () => {
    it('Should be a function', () => {
      const sumArray = funcs.sumArray;
      assert.isFunction(sumArray);
    })
    it('Should pass a summed array to callback', () =>{
      const sumArray = funcs.sumArray;
      const spy = sinon.spy();
      const arr = [3, 0, 4];
      sumArray(arr, spy);
      sinon.assert.calledWith(spy, 7);
    })
  })
  describe('forEach', () => {
    it('Should be a function', () => {
      const forEach = funcs.forEach;
      assert.isFunction(forEach);
    })
    it('Should call a function for each value in an array', () => {
      const forEach = funcs.forEach;
      const spy = sinon.spy();
      const arr = [3, 0, 4];
      forEach(arr, spy);
      sinon.assert.calledThrice(spy);
      sinon.assert.calledWith(spy, 3);
      sinon.assert.calledWith(spy, 0);
      sinon.assert.calledWith(spy, 4);
    })
  })
  describe('map', () => {
    it('Should be a function', () => {
      const map = funcs.map;
      assert.isFunction(map);
    })
    it('should modify an array with cb', () => {
      const map = funcs.map;
      const arr = [3, 0, 4];
      const spy = sinon.spy();
      const result = map(arr, spy);
      assert.isArray(result);
      sinon.assert.calledThrice(spy);
    })
  })
  describe('getUserConstructor', () => {
    it('Should be a function', () => {
      const getUserConstructor = funcs.getUserConstructor;
      assert.isFunction(getUserConstructor);
    })
    it('Should construct a user', () => {
      const getUserConstructor = funcs.getUserConstructor;
      const User = getUserConstructor();
      
    })
  })
  describe('addPrototypeMethod', () => {
    it('Should be a function', () => {
      const addPrototypeMethod = funcs.addPrototypeMethod;
      assert.isFunction(addPrototypeMethod);
    })
  })
  describe('addReverseString', () => {
    it('Should be a function', () => {
      const addReverseString = funcs.addReverseString
      assert.isFunction(addReverseString);
    })
    it('Should add the prototype reverse', () => {
      const addReverseString = funcs.addReverseString;
      const str = 'pow';
      addReverseString();
      assert.equal(str.reverse(), 'wop')
    })
  })
  describe('nFactorial', () => {
    it('Should be a function', () => {
      const nFactorial = funcs.nFactorial;
      assert.isFunction(nFactorial);
    })
    it('Should produce the factorial of a number', () => {
      const nFactorial = funcs.nFactorial;
      assert.equal(nFactorial(3), 6);
    })
  })
  describe('cacheFunction', () => {
    it('Should be a function', () => {
      const cacheFunction = funcs.cacheFunction;
      assert.isFunction(cacheFunction); 
    })
  })
})