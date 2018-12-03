
function cal(){
        var n1 = parseInt(document.getElementsByName('k').value);
        var n2 = parseInt(document.getElementsByName('h').value);
        var opt = document.querySelector(option).value;

        if(opt === '+'){
               document.getElementsByName('result').value = n1+n2;
        }
}