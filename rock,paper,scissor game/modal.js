const DOMStrings = {

    rules: '.rules',
    ruleBox: '.rules-overlay',
    closeBtn: '.cross-btn',

}

document.querySelector(DOMStrings.rules).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).classList.add('active')
})

document.querySelector(DOMStrings.closeBtn).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).classList.remove('active');
})