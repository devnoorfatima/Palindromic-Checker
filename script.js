function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}
const input = document.getElementById("input");

function check() {
    let value = input.value;
    document.getElementById("p").innerHTML = palindrome(value);
}
input.addEventListener("keypress", function (x) {
    if (x.keyCode === 13) {
        check();
    }
});