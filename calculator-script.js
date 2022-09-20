function add() {
    var leftNum  = parseFloat(document.getElementById("left-num").value);
    var rightNum = parseFloat(document.getElementById("right-num").value);

    var sum = leftNum + rightNum;

    document.getElementById("result").value = sum;
}

function subtract() {
    var leftNum  = parseFloat(document.getElementById("left-num").value);
    var rightNum = parseFloat(document.getElementById("right-num").value);

    var subtract = leftNum - rightNum;

    document.getElementById("result").value = subtract;
}

function multiply() {
    var leftNum  = parseFloat(document.getElementById("left-num").value);
    var rightNum = parseFloat(document.getElementById("right-num").value);

    var multiply = leftNum * rightNum;

    document.getElementById("result").value = multiply;
}

function divide() {
    var leftNum  = parseFloat(document.getElementById("left-num").value);
    var rightNum = parseFloat(document.getElementById("right-num").value);

    if (!rightNum)
        alert("Insira um numero que não seja zero para a divisão");
    else
        var divide = leftNum / rightNum;

        document.getElementById("result").value = divide;
}