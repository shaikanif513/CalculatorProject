let presentExpression= '';

function appendNumber(number){
    presentExpression +=number;
    document.getElementById('result').value=presentExpression;
}

function appendOperator(operator){
    presentExpression += `${operator}`;
    document.getElementById('result').value=presentExpression;
}

function calculateResult(){
    presentExpression=eval(presentExpression.replace('÷', '/').replace('x', '*'));
    document.getElementById('result').value=presentExpression;
}

function clearResult(){
    presentExpression='';
    document.getElementById('result').value='';
}
