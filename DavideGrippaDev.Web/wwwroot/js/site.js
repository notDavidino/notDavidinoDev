//home scroll function
$('#WELCOME').click(function () {
    $('section').addClass('active');

    $('html,body').animate({
        scrollTop: $('#ABOUT').offset().top
    },
        'slow');
});

$('a').click(function () {
    var link = this.href;
    if (link.startsWith('#')) {
        $('html,body').animate({
            scrollTop: $(link).offset().top
        },
            'slow');
    }
});