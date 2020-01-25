$(document).ready(function(){
    console.log('ready');
    // search form
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('js-open');
        $('#search > form > input[type="search"]').focus();
    });
    // show search form on click
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'js-close' || event.keyCode == 27) {
            $(this).removeClass('js-open');
        }
    });
    // show subcategories on click
    $("#zaNjuDropdown").click(function(){
        $("#zaNjuList").slideToggle("slow");
    });

    $("#zaNjegaDropdown").click(function(){
        $("#zaNjegaList").slideToggle("slow");
    });
    // quantity add or sub
    $('.add').click(function () {
        if ($(this).prev().val() < 3) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
});
    // smooth scroll
$(document).scroll(function () {
    var header = $(".js-scroll-header");
    header.toggleClass('js-scroll-fixed', $(this).scrollTop() > header.height());
});
