
$(document).ready(function(){
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
            var regExTxt = /^([A-Za-z]{0,})$/;
            var validateName = regExTxt.test(contact_name);
            if(!validateName){
                $('#contact-name').after('<span class="js-errorForm">Ovo je tektstualno polje. </span>');
            }
        }

        if(contact_email.length < 1){
            $('#contact-email').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var regEx = /^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
            var validateEmail = regEx.test(contact_email);
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


    })

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
            var regExMail = /^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
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

});
