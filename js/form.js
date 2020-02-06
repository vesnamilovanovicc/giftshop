
$(document).ready(function(){
    // global variables
    var regExTxt = /^([A-Za-z]{0,})$/;
    var regExMail = /^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
    var regExNumber = /^[0-9]*$/;

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

    // login form - basic client side validation
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

    // update account (user) information / clint side input validation
    $('#userForm').submit(function (e) {
        e.preventDefault();
        var user_first_name = $('#user-first-name').val();
        var user_last_name = $('#user-last-name').val();
        var user_address = $('#user-address').val();
        var user_phone = $('#user-phone').val();
        var user_email = $('#user-email').val();
        var user_password = $('#user-password').val();
        var user_new_password = $('#user-new-password').val();
        var user_new_password_confirm = $('#user-new-password-confirm').val();
        $('.js-errorForm').remove();

        if(user_first_name.length < 1){
            $('#user-first-name').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else{
            var validateUserFirstName = regExTxt.test(user_first_name);
            if(!validateUserFirstName){
                $('#user-first-name').after('<span class="js-errorForm">Ovo polje je tekstualno.</span>');
            }
        }
        if(user_last_name.length < 1){
            $('#user-last-name').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else{
            var validateUserLastName = regExTxt.test(user_last_name);
            if(!validateUserLastName){
                $('#user-last-name').after('<span class="js-errorForm">Ovo polje je tekstualno.</span>');
            }
        }
        if(user_address.length < 1){
            $('#user-address').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        if(user_phone.length < 1){
            $('#user-phone').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else{
            var validateUserPhoneNumber = regExNumber.test(user_phone);
            if(!validateUserPhoneNumber){
                $('#user-phone').after('<span class="js-errorForm">Samo brojevi.</span>');
            }
        }
        if(user_email.length < 1){
            $('#user-email').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else{
            var validateUserMail = regExMail.test(user_email);
            if(!validateUserMail){
                $('#user-email').after('<span class="js-errorForm">Unesite ispravan mejl.</span>');
            }
        }

        if(user_password.length < 1) {
            $('#user-password').after('<span class="js-errorForm">Ovo polje je obavezno..</span>');
        }
        else {
            if (user_password.length < 8) {
                $('#user-password').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');
            }
        }
        // new password
        if(user_new_password != "" && user_new_password.length < 8){
            $('#user-new-password').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');

        }

        if(user_new_password != ""  && user_new_password_confirm.length < 1) {
            $('#user-new-password-confirm').after('<span class="js-errorForm">Ovo polje je obavezno.</span>');
        }
        else {
            if (user_new_password.length >= 8 && user_new_password_confirm.length < 8) {
                $('#user-new-password-confirm').after('<span class="js-errorForm">Lozinka mora imati najmanje 8 karaktera.</span>');
            }
            else{
                if(user_new_password != user_new_password_confirm){
                    $('#user-new-password').after('<span class="js-errorForm">Lozinke se ne poklapaju.</span>');
                    $('#user-new-password-confirm').after('<span class="js-errorForm">Lozinke se ne poklapaju.</span>');
                }
            }
        }




    });

});
