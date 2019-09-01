
function countVowels(word){
    var vowels = ['a','e','i','o','u'];
    if(typeof word === 'string'){
        var wordArray = Array.from(word.toLowerCase());
        var cleanWordArray = [];
        for(var i in vowels ){
            if (wordArray.includes(vowels[i]) !== false){
                cleanWordArray.push(vowels[i]);
            }
        }
        console.log(cleanWordArray.join(''));
    }

};

countVowels('adfdghyuresxcv');
countVowels('drinik water');

// module.exports = countVowels