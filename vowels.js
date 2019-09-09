var vowels = ['a','e','i','o','u'];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//function to filter the vowels
function wordVowels(x){
    var cleanWordArray = [];
    for(var i in vowels ){
        if (x.includes(vowels[i]) !== false){
            cleanWordArray.push(vowels[i]);
        }
    }
    return cleanWordArray.join('');
};

//function to get duplicates count 
var newWord = [];
var newWordArray = [];  
function getRepeatedLetters(y){
    var newArray = [];
  //create arrray of all values as letters
    for(var i in y ){
        if (letters.includes(y[i]) !== false){
            newArray.push(y[i]);
    }
  }
  //sort out the repeated values in the array
    for(var l in newArray){
        if (newArray.indexOf(newArray[l]) !== newArray.lastIndexOf(newArray[l])){
            newWord.push(newArray[l]);
        }
   }
  //function to filter duplicates
    var arrayUnique = function (arr) {
        return arr.filter(function(item, index){
            return arr.indexOf(item) >= index;
    });
  };
  return arrayUnique(newWord).length;
}



// function to return vowels and duplicates count
function countVowels(word){
    var vowelWord;
    var repeatCount;
    if(typeof word === 'string'){
        var wordArray = Array.from(word.toLowerCase());
        vowelWord = wordVowels(wordArray);
        repeatCount = getRepeatedLetters(wordArray);
        return `("${vowelWord}",${repeatCount})`;
    }
};
// countVowels('drink water');
// countVowels('dahdah');
// countVowels('adafgdhyure');

module.exports = countVowels