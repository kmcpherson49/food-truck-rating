$(document).ready(function(){
    var signup = $('form.signup');
    var email = $('input#emailInput');
    var password = $('input#passwordInput');
    var username = $('input#usernameInput');


    signup.on('submit', function(event) {
        event.preventDefault();
        var userInput = {
            email: email.val().trim(),
            password: password.val().trim(),
            username: username.val().trim()
        };



        if (!userInput.email || !userInput.password || !userInput.username) {
            return;
        }

        userSignup(userInput.email, userInput.password, userInput.username);
    });

    function userSignup(email, password, username) {
        $.post('/signup', {
            email: email,
            password: password,
            username: username
        })
        .then(function() {
            window.location.replace('/members');
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});