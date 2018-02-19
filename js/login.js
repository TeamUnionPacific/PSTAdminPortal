// console.log(document.getElementById("login"));
//
//
// document.getElementById("login").onclick = function () {
//     Submit();
// }

function Submit(user, pw) {
    /*
    access java webservice here
    should return a true/false from the java file
    true > correct user/pw - set session to user and return true
    false > incorrect user/pw - show error of incorrect user/pw
    */
    sessionStorage.setItem('user', user);
    return true;
}


window.onload = function (ev) {
    console.log("loaded");
    document.getElementById("submit").onclick = function () {

        var username = document.getElementById('login-input').value;
        var pw = document.getElementById('pw-input').value;
        console.log(username);
        if(Submit(username, pw)){
            window.location.href = 'landing.html'
        }else{

        }
    }
}