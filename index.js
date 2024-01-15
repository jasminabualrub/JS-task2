var registerForm=document.querySelector('.registerForm');

registerForm.onsubmit=function(e){
    e.preventDefault();
    var inputs =e.target.elements;
    var amount=inputs[0].value;
    var currency=document.querySelector('.exchange').value;
    if(currency=='dollar'){
        amount/=3.75;
        document.querySelector('.result').innerHTML=amount+' '+'$';
    }
    else if(currency=='dinar'){
        amount/=5.266;
        document.querySelector('.result').innerHTML=amount+' '+'JD';
    }
    else if(currency=='nis'){
        amount=amount;
        document.querySelector('.result').innerHTML=amount+' '+'ILS';
    }
    else{
        document.querySelector('.result').textContent='this service not avilable';  
    }
    console.log(amount);
 console.log(currency);

    

}