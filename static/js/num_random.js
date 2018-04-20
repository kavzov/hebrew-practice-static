/** Vars **/
let maxNumValInForm = 1000;


/** Nodes **/
let minNum = '#min-num';
let maxNum = '#max-num';


/** Functions **/
function outputContent() {
    let gender = 1;     // TODO take from radio input
    let min = parseInt($(minNum).val());
    let max = parseInt($(maxNum).val()) + 1;
    if ($(maxNum).val() > maxNumVal) $(maxNum).val(maxNumVal);
    if (parseInt($(minNum).val()) > maxNumVal) $(minNum).val(minNumVal);
    /* generate random number */
    // get last number
    let lastNum = taskArea.text();
    // generate new
    let randNum = getRandInt(min, max);
    // if new == last, generate till new
    while (lastNum == randNum) {
        randNum = getRandInt(min, max);
    }
    let taskStr = randNum;
    let translit = translateNumber(randNum, 'rus', gender);
    let hebrew = translateNumber(randNum, 'heb', gender);

    outputTask(taskStr);
    setBtnTitle(translateBtn, btnTitleTranslate);
    removeBtnColor(translateBtn, greenColor);  // disable green color of the button if it set before
    outputTranslation(translit, hebrew);
    hideTranslation();
}


/** Events **/
/* Page load */
page.ready(function() {
    setNodeValue(minNum, minNumVal);
    setNodeValue(maxNum, maxNumValInForm);
    setNodeAttr(minNum, 'min', minNumVal);
    setNodeAttr(maxNum, 'max', maxNumVal);
    $(maxNumLimitTip).html(minNumVal + '&nbsp;&gt;&nbsp;' + maxNumVal);
    outputContent();
});

/* on change min or max values. set to default values if overkill */
$(minNum).on('keyup', function() {
    if (parseInt($(minNum).val()) < minNumVal)
        $(minNum).val(minNumVal);
    if (parseInt($(minNum).val()) > maxNumVal)
        $(minNum).val(minNumVal);
});
$(maxNum).on('keyup', function() {
    if ($(maxNum).val() <= minNumVal)
        $(maxNum).val(parseInt($(minNumVal)) + 1);
    if ($(maxNum).val() > maxNumVal) {
        $(maxNum).val(maxNumVal);
    }
});

/* Click on Translate button */
translateBtn.on('click', function() { showTranslationOrNewTask(); });

/* `Enter` key click on min or max fields does the same the Translate button click does */
function checkEnterOnMinMax(e) {
    if (e.which === 13) {
        showTranslationOrNewTask();
    }
}
$(minNum + ', ' + maxNum).on('keypress', function(e) { checkEnterOnMinMax(e); });
// $(minNum).on('keypress', function(e) { checkEnterOnMinMax(e); });
