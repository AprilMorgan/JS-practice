function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { //checks if even number is given
      const tripleEvenNumber = array[i] * 3;  //multiply by 3
      sum += tripleEvenNumber; //add number to the total
    }
  }
  return sum;
}
