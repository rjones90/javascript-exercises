const repeatString = function(wordBeingTested, numberToRepeat) {
    if (numberToRepeat < 0) return 'ERROR';
    let wordBeingRepeated = '';
    for (let i = 0; i < numberToRepeat; i++) {
      wordBeingRepeated += wordBeingTested;
    }
    return wordBeingRepeated;
  };
  

// Do not edit below this line
module.exports = repeatString;
