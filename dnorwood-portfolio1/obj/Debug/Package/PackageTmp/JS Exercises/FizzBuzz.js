function fizzBuzz() {
    var firstNumber = Number(document.getElementById("testNumber2").value);
    var secondNumber = Number(document.getElementById("testNumber3").value);
    var result = "";
    for (var i = 1; i <= 100; i++) {

        if (i % firstNumber == 0 && i % secondNumber == 0) {
            result += " fizzbuzz ";
        }
        else if (i % firstNumber == 0) {
            result += " fizz ";
        }
        else if (i % secondNumber == 0) {
            result += " buzz ";
        }

        else {
            result += i + " ";
        }
    }
    document.getElementById("result").innerHTML = result;

}

  
