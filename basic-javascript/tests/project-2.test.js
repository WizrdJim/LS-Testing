const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 functions', () => {
  describe('getBiggest', () => {
    it('Should be a function', ()=>{
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    })
    it('Should return the bigger value', ()=> {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(1,2), 2);
    })
  })
  describe('greeting', () => {
    it('Should be a function', ()=>{
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    })
    it('Should call the corresponding greeting', () => {  
      const germ = funcs.greeting('German');
      const span = funcs.greeting('Spanish');
      assert.equal(germ, 'Guten Tag!');
      assert.equal(span, 'Hola!');
    })
  })
  describe('isTenOrFive', () => {
    it('Should be a function', ()=>{
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    })
    it('Should return if its a 10 or 5', ()=> {
      const isTenOrFive = funcs.isTenOrFive;
      assert.isTrue(isTenOrFive(10));
      assert.isTrue(isTenOrFive(5));
    })
  })
  describe('isInRange', () => {
    it('Should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.isFunction(isInRange);
    })
    it('Should check if less than 50 and greater than 20', () => {
      const isInRange = funcs.isInRange;
      assert.isTrue(isInRange(30));
    })
  })
  describe('isInteger', () => {
    it('Should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.isFunction(isInteger);
    })
    it('Should tell if the number is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.isTrue(isInteger(2));
    })
  })
  describe('fizzBuzz', () => {
    it('Should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.isFunction(fizzBuzz);
    })
    it('Should return words that may or may not mean anything', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      assert.equal(fizzBuzz(10), 'buzz');
      assert.equal(fizzBuzz(9), 'fizz');
    })
  })
  describe('isPrime', () => {
    it('Should be a function', ()=>{
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    })
    it('Should tell if the number is a prime Number', () =>{
      const isPrime = funcs.isPrime;
      assert.isOk(isPrime(3));
      assert.isNotOk(isPrime(0));
    })
  })
  describe('returnFirst', () => {
    it('Should be a function', ()=>{
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    })
    it('Should return the first number in the array', () =>{
      const returnFirst = funcs.returnFirst;
      const arr = [3,4,0];
      assert.equal(returnFirst(arr), 3);    
    })
  })
  describe('returnLast', () => {
    it('Should be a function', ()=>{
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    })
    it('Should return the last item in the array', () =>{
      const returnLast = funcs.returnLast;
      const arr = [3,4,0];
      assert.equal(returnLast(arr), 0);
    });
  })
  describe('getArrayLength', () => {
    it('Should be a function', ()=>{
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    })
    it('Should return the length of given array', () =>{
      const getArrayLength = funcs.getArrayLength;
      const arr = [3, 0, 4];
      assert.equal(getArrayLength(arr), 3);
    })
  })
  describe('incrementByOne', () => {
    it('Should be a function', ()=>{
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    })
    it('Should increment an arrays values by 1', ()=>{
      const incrementByOne = funcs.incrementByOne;
      const arr = [3, 0, 4];
      const result = incrementByOne(arr);
      assert.deepEqual(result, [4, 1, 5]);
    })
  })
  describe('addItemToArray', () => {
    it('Should be a function', ()=> {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    })
    it('Should add items to array', () =>{
      const addItemToArray = funcs.addItemToArray;
      const arr = [3, 0, 4];
      assert.deepEqual(addItemToArray(arr, 4),[3, 0, 4, 4] )
    })
  })
  describe('addItemToFront', () => {
    it('Should be a function', ()=>{
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    })
    it('Should add the item to the front of the array', () => {
      const addItemToFront = funcs.addItemToFront;
      const arr = [3, 0, 4];
      assert.deepEqual(addItemToFront(arr, 5), [5, 3, 0, 4]);
    })
  })
  describe('wordsToSentence', () => {
    it('Should be a function', ()=>{
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    })
    it('should turn an array of words into a sentence', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const arr = ['Hello', 'World'];
      assert.equal(wordsToSentence(arr), 'Hello World');
    })
  })
  describe('contains', () => {
    it('Should be a function', ()=>{
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    })
    it('Should contain the item in the array', () => {
      const contains = funcs.contains;
      const arr = ['I', 'am', 'Ubermensch'];
      assert.isTrue(contains(arr, 'Ubermensch'));
    })
  })
  describe('addNumbers', () => {
    it('Should be a function', ()=>{
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    })
    it('Should add an array of numbers', () => {
      const addNumbers = funcs.addNumbers;
      const arr = [3, 0, 4];
      assert.equal(addNumbers(arr), 7);
    })
  })
  describe('averageTestScore', () => {
    it('Should be a function', ()=>{
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    })
    it('Should get the avverage of an array of numbers', ()=> {
      const averageTestScore = funcs.averageTestScore;
      const arr = [3, 0, 4, 3];
      assert.equal(averageTestScore(arr), 2.5);
    })
  })
  describe('largestNumber', () => {
    it('Should be a function', ()=>{
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    })
    it('Should return the largest number in an array', () => {
       const largestNumber= funcs.largestNumber;
       const arr = [3, 0, 4];
       assert.equal(largestNumber(arr), 4);
    })
  })
});

