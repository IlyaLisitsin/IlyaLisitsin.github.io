(function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    function canvasDraw(inputValue, canvasWidth) {
        if (!inputValue) inputValue = '';
        canvasHeight = 117;

        canvas.width = canvasWidth;
        if (canvasWidth <= 40) canvas.width = 0;

        canvas.height = canvasHeight;
        context.fillStyle = '#fe0000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#fff';
        context.font = '100px Futura';
        context.textBaseline = 'middle';
        context.fillText(inputValue, 20, 57);
    }

    canvasDraw();

    var input = document.querySelector('input');
    var initial = document.querySelector('#initial');
    var checker = document.querySelector('#checker');
    var copyBtn = document.querySelector('.copy-btn');

    input.addEventListener('keyup', inputHandler);
    input.onfocus = inputActivate;
    input.onblur = inputDeactivate;

    copyBtn.addEventListener('click', copyBtnHandler);

    function inputActivate(e) {
        initial.classList.add('active')
    }

    function inputDeactivate(e) {
        initial.classList.remove('active')
    }

    function checkerFill(input) {
        checker.innerText = input;
        return checker.getBoundingClientRect().width;
    }

    function inputHandler(e) {
        if (this.value.length) initial.classList.add('hide');
        else initial.classList.remove('hide');
        canvasDraw(this.value, checkerFill(this.value));
    }

    function copyBtnHandler() {
        var img = canvas.toDataURL("image/png");

    }
})();