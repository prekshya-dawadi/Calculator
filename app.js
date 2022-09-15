function display(number){
    if(number == ''){
        document.getElementById('input').value = '';
    }else{
        document.getElementById('input').value += number;
    }
}

function calculate(){
    var inputs = document.getElementById('input').value;
    var result = eval(inputs);
    document.getElementById('input').value = result;
}