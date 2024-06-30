$(document).ready(function() {
    $('#new-user').click(function() {
        $('#existing-user-form').hide();
        $('#new-user-form').show();
    });

    $('#existing-user').click(function() {
        $('#new-user-form').hide();
        $('#existing-user-form').show();
    });

    $('#register-form').submit(function(event) {
        event.preventDefault();
        if ($('#name').val() && $('#cep').val() && $('#email').val() && $('#password').val()) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    $('#login-form').submit(function(event) {
        event.preventDefault();
        if ($('#login-email').val() && $('#login-password').val()) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});