function palindrome(str) {
    return  str.replace(/[\W_]/g, '').toLowerCase() === 
            str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    }

    function check(){
        var value = document.getElementById("input").value;
        document.getElementById("p").innerHTML=palindrome(value);
    }


    