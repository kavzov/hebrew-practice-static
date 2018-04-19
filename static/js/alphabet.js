function letterOutput() {
    var letter = [
        {'he': 'א‬', 'ru': 'Áлеф'}, {'he': 'בּ‬‬', 'ru': 'Бет'}, {'he': 'ב‬', 'ru': 'Вет'}, {'he': 'ג‬', 'ru': 'Ги́мель'},
        {'he': 'ד‬', 'ru': 'Да́лет'}, {'he': 'ה‬', 'ru': 'hей'}, {'he': 'ו‬', 'ru': 'вав'}, {'he': 'ז‬', 'ru': 'За́ин'},
        {'he': 'ח‬', 'ru': 'Хет'}, {'he': 'ט‬', 'ru': 'Тет'}, {'he': 'י‬', 'ru': 'Йуд'}, {'he': 'כּ‬', 'ru': 'Каф'},
        {'he': 'כ‬', 'ru': 'Хаф'}, {'he': 'ך‬', 'ru': 'Хаф софи́т'}, {'he': 'ל‬', 'ru': 'Ла́мед'}, {'he': 'מ‬', 'ru': 'Мем'},
        {'he': 'ם‬', 'ru': 'Мем софи́т'}, {'he': 'נ‬', 'ru': 'Нун'}, {'he': 'ן‬', 'ru': 'Нун софи́т'}, {'he': 'ס‬', 'ru': 'Са́мех'},
        {'he': 'ע‬', 'ru': 'А́ин'}, {'he': 'פּ‬', 'ru': 'Пей'}, {'he': 'פ‬', 'ru': 'Фей'}, {'he': 'ף‬', 'ru': 'Фей софи́т'},
        {'he': 'צ‬', 'ru': 'Ца́ди'}, {'he': 'ץ‬', 'ru': 'Ца́ди софи́т'}, {'he': 'ק‬', 'ru': 'Куф'}, {'he': 'ר‬', 'ru': 'Рейш'},
        {'he': 'שׁ‬', 'ru': 'Шин'}, {'he': 'שׂ‬‬', 'ru': 'Син'}, {'he': 'ת‬', 'ru': 'Тав'}
    ];

    var lastLetter = $('#hebrew-letter').text();
    var rand = getRandInt(0, letter.length);
    var hebLetter = letter[rand]['he'];

    while (lastLetter === hebLetter) {
        rand = getRandInt(0, letter.length);
        hebLetter = letter[rand]['he'];
    }
    $('#hebrew-letter').html(hebLetter);
    $('#answ-letter-rus').html(letter[rand]['ru']);
    /* show button title */
    $('#answer-btn').val(btnTitleTranslate);
    /* disable green color of the button if there is */
    if ($('#answer-btn').hasClass('btn-success')) $('#answer-btn').removeClass('btn-success');
    /* hide answer */
    $('#letter-answ').hide();
}

function letterAnswerClick() {
    if ($('#letter-answ').css('display') == 'none') {
        $('#letter-answ').fadeIn(250);
        $('#answer-btn').val(btnTitleMore);
        $('#answer-btn').addClass('btn-success');
    }
    else {
        letterOutput();
    }
}

/* answer button click */
$('#answer-btn').on('click', function() { letterAnswerClick() });
