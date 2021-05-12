$(document).ready(function(){
    var login = $('form.login');
    var email = $('input#emailInput');
    var password = $('input#passwordInput');

    login.on('submit', function(event) {
        event.preventDefault();
        var userInput = {
            email: email.val().trim(),
            password: password.val().trim()
        };

        if (!userInput.email || !userInput.password) {
            return;
        }

        userLogin(userInput.email, userInput.password);
    });

    function userLogin(email, password) {
        $.post('/login', {
            email: email,
            password: password
        })
        .then(function() {
            window.location.replace('/');
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});