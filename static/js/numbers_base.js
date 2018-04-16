var btnTitleTransl = 'Перевод';
var btnTitleMore = 'Ещё';

var minNum = 0;
var maxNum = 19999;
var maxFormNum = 1000;
$('#min-num').val(minNum);
$('#min-num').attr('min', minNum);
$('#max-num').val(maxFormNum);
$('#max-num').attr('max', maxNum);

var ns = [
    null,
    [
        {'rus': 'э́фес', 'heb': 'אֶפֶס'}, {'rus': 'аха́т', 'heb': 'אַחַת'}, {'rus': 'шта́им', 'heb': 'שְׁתַּיִים'}, {'rus': 'шало́ш', 'heb': 'שָׁלוֹשׁ'}, {'rus': 'арба́', 'heb': 'אַרְבַּע'}, {'rus': 'хамéш', 'heb': 'חָמֵשׁ'}, {'rus': 'шеш', 'heb': 'שֵׁשׁ'}, {'rus': 'шéва', 'heb': 'שֶׁבַע'}, {'rus': 'шмонé', 'heb': 'שְׁמוֹנֶה'}, {'rus': 'тéша', 'heb': 'תֵּשַׁע'},
        {'rus': 'э́сер', 'heb': 'עֶשֶׂר'}, {'rus': 'аха́т эсре́', 'heb': 'אַחַת עֶשׂרֵה'}, {'rus': 'ште́йм эсре́', 'heb': 'שְׁתֵיים עֶשׂרֵה'}, {'rus': 'шлош эсре́', 'heb': 'שְׁלוֹשׁ עֶשׂרֵה'}, {'rus': 'арба́ эсрé', 'heb': 'אַרְבַּע עֶשׂרֵה'}, {'rus': 'хаме́ш эсре́', 'heb': 'חֲמֵשׁ עֶשׂרֵה'}, {'rus': 'шеш эсре́', 'heb': 'שֵׁשׁ עֶשׂרֵה'}, {'rus': 'шва эсре́', 'heb': 'שְׁבַע עֶשׂרֵה'}, {'rus': 'шмонé эсре́', 'heb': 'שְׁמוֹנֶה עֶשׂרֵה'}, {'rus': 'тша эсре́', 'heb': 'תְּשַׁע עֶשׂרֵה'}
    ],
    [
        null, null,
        {'rus': 'эсри́м', 'heb': 'עֶשְׂרִים'}, {'rus': 'шлоши́м', 'heb': 'שׁלוֹשִים'}, {'rus': 'арбаи́м', 'heb': 'אַרְבָּעִים'}, {'rus': 'хамиши́м', 'heb': 'חֲמִישִׁים'}, {'rus': 'шиши́м', 'heb': 'שִׁשִׁים'}, {'rus': 'шиви́м', 'heb': 'שִׁבְעִים'}, {'rus': 'шмони́м', 'heb': 'שְׁמוֹנִים'}, {'rus': 'тиши́м', 'heb': 'תִּשְׁעים'}
    ],
    [
        null,
        {'rus': 'ме́а', 'heb': 'מֵאָה'}, {'rus': 'мата́им', 'heb': 'מָאתַיִים'}, {'rus': 'шло́ш мэо́т', 'heb': 'שְׁלֹש מֵאוֹת'}, {'rus': 'арба́ мэо́т', 'heb': 'אַרְבַּע מֵאוֹת'}, {'rus': 'хаме́ш мэо́т', 'heb': 'חֲמֵשׁ מֵאוֹת'}, {'rus': 'шеш мэо́т', 'heb': 'שֵׁשׁ מֵאוֹת'}, {'rus': 'шва мэо́т', 'heb': 'שְׁבַע מֵאוֹת'}, {'rus': 'шмоне́ мэо́т', 'heb': 'שְׁמוֹנָה מֵאוֹת'}, {'rus': 'тша мэо́т', 'heb': 'תְּשַׁע מֵאוֹת'}
    ],
    [
        null,
        {'rus': 'э́леф', 'heb': 'אֶלֶף'}, {'rus': 'альпа́им', 'heb': 'אַלְפַּיִים'}, {'rus': 'шло́шэт алафи́м', 'heb': 'שלוֹשֶת אֲלָפִים'}, {'rus': 'арбаа́т алафи́м', 'heb': 'אַרבַּעַת אֲלָפִים'}, {'rus': 'хаме́шэт алафи́м', 'heb': 'חֲמֵשֶת אֲלָפִים'}, {'rus': 'ше́шэт алафи́м', 'heb': 'שֵשֶת אֲלָפִים'}, {'rus': 'шивъа́т алафи́м', 'heb': 'שִבעַת אֲלָפִים'}, {'rus': 'шмона́т алафи́м', 'heb': 'שמוֹנַת אֲלָפִים'}, {'rus': 'тишъа́т алафи́м', 'heb': 'תִשעַת אֲלָפִים'}
    ],
    [
        null,
        {'rus': 'асэ́рэт алафи́м', 'heb': 'עֲשֶׂרֶת אֲלָפִים'},
    ]
];

function numOrder(n) {
    return n.toString().length;
}

function numMultiple(num, order) {
    return num % Math.pow(10, order) === 0;
}

function getDigPrep(dig, lang) {
    /* digit preposition */
    var digPref = {
        '1': ' вэ ', '2': ' у ',  '3': ' вэ ',  '4': ' вэ ',  '5': ' вэ ',   '6': ' ва ',   '7': ' ва ',   '8': ' у ',   '9': ' ва ',
    };
    // return (lang === 'rus') ? digPref[dig] : ' ו';
    return (lang === 'rus') ? ' вэ ' : ' ו';
}

/* temp for 2> digit preposition */
function getNumPrep(dig, lang) {
    var digPrep = {
        '1': ' вэ ', '2': ' у ',  '3': ' вэ ',  '4': ' вэ ',  '5': ' вэ ',   '6': ' ва ',   '7': ' ва ',   '8': ' у ',   '9': ' ва '
    };
    // return (lang === 'rus') ? digPrep[dig] : ' ו';
    return (lang === 'rus') ? ' вэ ' : ' ו';
}

function getDigit(dig, lang) {
    return ns[1][dig][lang];
}

function getDigNum(order, digit, lang) {
    return ns[order][digit][lang];
}

function twoDigNum(num, lang) {
    var str = '';
    num = num.toString();
    var numbOrder = numOrder(num);
    var highOrderDigit = num[0];
    if (num < 20) {
        str = getDigit(num, lang);
    }
    else {
        str = ns[numbOrder][highOrderDigit][lang];
        if (num % 10 !== 0)
            str += getDigPrep(num[1], lang) + getDigit(num[1], lang);
    }
    return str;
}

function translateNumber(number, lang) {
    number = number.toString();
    var numberOrder = numOrder(number);
    var highOrderDigit = number[0];

    if (numberOrder === 1) {
        return getDigit(number, lang);
    }
    if (numberOrder === 2) {
        return twoDigNum(number, lang);
    }
    if (numberOrder >= 3) {
        var str = getDigNum(numberOrder, highOrderDigit, lang);
        number -= highOrderDigit * Math.pow(10, numberOrder-1);
        if (number) {
            /* check for preparation */
            if (numMultiple(number, numberOrder-2) || number < 20) {
                str += getNumPrep(number.toString()[0], lang);
            } else { str += ' '; }
            return str + translateNumber(number, lang);
        }
        return str;
    }
}

function numsTable() {
    var str = '<table class="nums-table">';
    for (var i=0; i<999; i++) {
        str += '<tr><td>' + getNumTransl(i, 'heb') + '</td><td>' + getNumTransl(i, 'rus') + '</td><td>' + i + '</td></tr>';
    }
    str += '</table>';
    return str;
}

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + parseInt(min);
}

function answerClick() {
    if ($('#num-answ').css('display') == 'none') {
        $('#num-answ').fadeIn(250);
        $('#answ-btn').val(btnTitleMore);
        $('#answ-btn').addClass('btn-success');
    }
    else {
        outputNum();
    }
}

function outputNum() {
    var min = parseInt($('#min-num').val());
    var max = parseInt($('#max-num').val()) + 1;
    /* generate random number */
    /* get last number */
    var lastNum = $('#num').text();
    /* generate new */
    var randNum = getRandInt(min, max);
    /* if new == last, generate till other new */
    while (lastNum == randNum) {
        randNum = getRandInt(min, max);
    }
    /* output the number and answer */
    $('#num').html(randNum);
    $('#num-answ-rus').html(translateNumber(randNum, 'rus'));
    $('#num-answ-heb').html(translateNumber(randNum, 'heb'));
    /* show button title */
    $('#answ-btn').val(btnTitleTransl);
    /* disable green color of the button if there is */
    if ($('#answ-btn').hasClass('btn-success')) $('#answ-btn').removeClass('btn-success');
    /* hide answer */
    $('#num-answ').hide();
}
