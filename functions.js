function numberInWords(number) {
    var ret;
    var ones = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    if(number >=1 || number <= 10){
        ret = ones[parseInt(number)-1];
    }
    if(parseInt(number)===11){
        ret = "eleven";
    }
    return ret;
}

function numberInWordsAlert(number){
    alert(numberInWords(number));
}