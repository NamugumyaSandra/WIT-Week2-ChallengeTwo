function fizzBuzz(list1, list2) {
    if(typeof list1 !== "object" || typeof list2 !== "object"){
        return "Invalid input."
    }else{
        let newList = list1.concat(list2);
        let totalLength = newList.length;
        if(totalLength % 3 === 0 && totalLength % 5 === 0){
            return('Fizzbuzz');
        } else if(totalLength % 5 === 0){
            return('Buzz');
        } else if(totalLength % 3 === 0){
            return('Fizz');
        } else {
            return(totalLength);
        }
    }
    
};


module.exports = fizzBuzz;