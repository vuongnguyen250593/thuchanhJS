function convert() {
    let input = document.getElementById('input').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if (select1 == select2) {
        document.getElementById('result').innerHTML = 'Result: ' + input;
    }
    if (select1 == "vnd" && select2 == "usd") {
        document.getElementById('result').innerHTML = 'Result: ' + input/23000;
    }
    if (select1 == "usd" && select2 == "vnd") {
        document.getElementById('result').innerHTML = 'Result: ' + input*23000;
    }
    if (select1 == "vnd" && select2 == "euro") {
        document.getElementById('result').innerHTML = 'Result: ' + input/30000;
    }
    if (select1 == "euro" && select2 == "vnd") {
        document.getElementById('result').innerHTML = 'Result: ' + input*30000;
    }
}

