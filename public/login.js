$(document).ready(function(){
    var login = $('form.login');


    $('#signIn').click(function(event) {
        event.preventDefault();
        console.log("clicked");
        var email = $('input#emailInput');
        var password = $('input#passwordInput');
        console.log(email, password)
       // event.preventDefault();
        var userInput = {
            email: email.val(),
            password: password.val()
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