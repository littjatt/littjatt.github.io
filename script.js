var enter =  document.getElementById('enter').addEventListener('click', checkAge)

function checkAge(){
    var userDob = document.getElementById('dob').value;
    var userAge = Date.parse(userDob);
    var a = new Date();
    var test = a.getTime();
    var c = number(test) - number(a);
    // var d = 31536000000;
    // var age = c/d;
    console.log(test);
    console.log(userAge);
    console.log(c);
    
}