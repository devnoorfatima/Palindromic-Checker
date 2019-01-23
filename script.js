function palindrome(str) {
    return  str.replace(/[\W_]/g, '').toLowerCase() === 
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    }
    
   console.log( palindrome("racecar"));
   console.log(palindrome("1 eye for of 1 eye."));
