function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinSting =  pin +'';
    if(pinSting.length == 4){
        return pin;
    }
    else {
        // console.log('Hello Pin I am Pin',  pin);
        return getPin();
    }
}

function generatePin(){
    const pin =  getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const calcInput = document.getElementById('typed-numbrs');
    const number = event.target.innerText;
    if(isNaN(number)){
        console.log(number)
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
});

function veryfiPin(){
    const pin = document.getElementById('display-pin').value;
    const typeedNumber = document.getElementById('typed-numbrs').value;
    const successMassage = document.getElementById('notify-success');
    const failErroe = document.getElementById('notify-fail');

    if(pin == typeedNumber){
        failErroe.style.display = 'none';
        successMassage.style.display = 'block';
    }
    else{
        successMassage.style.display = 'none';
        failErroe.style.display = 'block';
    }

}