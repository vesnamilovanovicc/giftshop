
$(document).ready(function(){
    // global variables
    var regExTxt = /^([A-Za-z]{0,})$/;
    var regExMail = /^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;

    // contact form - basic client side validation
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        var contact_name = $('#contact-name').val();
        var contact_email = $('#contact-email').val();
        var contact_subject = $('#contact-subject').val();
        var contact_message = $('#contact-message').val();
        $(".js-errorForm").remove();
        if(contact_name.length < 1){
            $('#contact-name').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateName = regExTxt.test(contact_name);
            if(!validateName){
                $('#contact-name').after('<span class="js-errorForm">Ovo je tekstualno polje. </span>');
            }
        }
        if(contact_email.length < 1){
            $('#contact-email').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateEmail = regExMail.test(contact_email);
            if(!validateEmail){
                $('#contact-email').after('<span class="js-errorForm">Unesite ispravan e-mail.</span>');
            }
        }
        if(contact_subject.length < 1){
            $('#contact-subject').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        if(contact_message.length < 1){
            $('#contact-message').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
    });

    // login form - basic slient side validation
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var login_email = $('#login-customer-email').val();
        var login_password = $('#login-customer-password').val();
        $('.js-errorForm').remove();
        // checking blank fiends and checking valid syntax for email and password fields
        if(login_email.length < 1){
            $('#login-customer-email').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateLoginMail = regExMail.test(login_email);
            if(!validateLoginMail){
                $('#login-customer-email').after('<span class="js-errorForm">Unesite ispravan mejl.</span>');
            }
        }
        if(login_password.length < 1) {
            $('#login-customer-password').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else {
            if (login_password.length < 8) {
                $('#login-customer-password').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');
            }
        }
    });

    // register form - basic client side validation
    $('#registerForm').submit(function (e) {
        e.preventDefault();
        var reg_first_name = $('#reg-first-name').val();
        var reg_last_name = $('#reg-last-name').val();
        var reg_email = $('#reg-email').val();
        var reg_password = $('#reg-password').val();
        var reg_password_confirm = $('#reg-password-confirm').val();

        $('.js-errorForm').remove();
        if(reg_first_name.length < 1){
            $('#reg-first-name').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateRegName = regExTxt.test(reg_first_name);
            if(!validateRegName){
                $('#reg-first-name').after('<span class="js-errorForm">Ovo polje je tekstualno.</span>');
            }
        }
        if(reg_last_name.length < 1){
            $('#reg-last-name').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateRegLastName = regExTxt.test(reg_last_name);
            if(!validateRegLastName){
                $('#reg-last-name').after('<span class="js-errorForm">Ovo polje je tekstualno.</span>');
            }
        }
        if(reg_email.length < 1){
            $('#reg-email').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateRegMail = regExMail.test(reg_email);
            if(!validateRegMail){
                $('#reg-email').after('<span class="js-errorForm">Unesite ispravan mejl.</span>');
            }
        }
        if(reg_password.length < 1) {
            $('#reg-password').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else {
            if (reg_password.length < 8) {
                $('#reg-password').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');
            }
        }

        if(reg_password_confirm.length < 1) {
            $('#reg-password-confirm').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else {
            if (reg_password_confirm.length < 8) {
                $('#reg-password-confirm').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');
            }
            else{
                if(reg_password != reg_password_confirm){
                    $('#reg-password').after('<span class="js-errorForm">Lozinke se ne poklapaju.</span>');
                    $('#reg-password-confirm').after('<span class="js-errorForm">Lozinke se ne poklapaju.</span>');
                }
            }
        }


    });

});
