
/* on change min or max values. set to default values if overkill */
$('#min-num, #max-num').on('change', function() {
    if ($('#min-num').val() < minNum || $('#min-num').val() > maxNum) {
        $('#min-num').val(minNum);
    }
    if ($('#max-num').val() < minNum || $('#max-num').val() > maxNum) {
        $('#max-num').val(maxNum);
    }
});

/* answer button click */
$('#answ-btn').on('click', function() { answerClick() });

/* `Enter` key click on min or max fields makes the same answer button click */
$('#min-num, #max-num').on('keypress', function(e) {
    if(e.which == 13) {
        answerClick();
    }
});

/* display all numbers on Shift + on number click */
$('#num').on('click', function(e){
    if (e.shiftKey) {
        $('#nums-list').html(numsTable());
    };
});
