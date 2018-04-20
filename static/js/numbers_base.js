function numsTable() {
    let str = '<table class="nums-table">';
    for (let i=0; i<999; i++) {
        str += '<tr><td>' + getNumTransl(i, 'heb') + '</td><td>' + getNumTransl(i, 'rus') + '</td><td>' + i + '</td></tr>';
    }
    str += '</table>';
    return str;
}

function outputNum(gender) {
    let min = parseInt($('#min-num').val());
    let max = parseInt($('#max-num').val()) + 1;
    /* generate random number */
    /* get last number */
    let lastNum = $('#num').text();
    /* generate new */
    let randNum = getRandInt(min, max);
    /* if new == last, generate till other new */
    while (lastNum == randNum) {
        randNum = getRandInt(min, max);
    }
    /* output the number and answer */
    $('#num').html(randNum);
    $('#num-answ-rus').html(translateNumber(randNum, 'rus', gender));
    $('#num-answ-heb').html(translateNumber(randNum, 'heb', gender));
    /* show button title */
    $('#answer-btn').val(btnTitleTranslate);
    /* disable green color of the button if there is */
    if ($('#answer-btn').hasClass('btn-success')) $('#answer-btn').removeClass('btn-success');
    /* hide answer */
    $('#num-answ').hide();
}
