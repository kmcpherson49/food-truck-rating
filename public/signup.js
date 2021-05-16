$(document).ready(function(){
    var signup = $('form.signup');

    $('signUp').click(function(event) {
        event.preventDefault();
        console.log('clicked');
        var email = $('input#emailInput');
        var password = $('input#passwordInput');
        var username = $('input#usernameInput');

        var userInput = {
            email: email.val(),
            password: password.val(),
            username: username.val()
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
            window.location.replace('/');
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});