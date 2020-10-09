let licenseValue = document.querySelectorAll('input[type="radio"]'),
    num          = document.querySelector('input[type="number"]'),
    forEach      = Array.prototype.forEach,
    inner        = document.getElementById('inner'),
    total        = document.getElementById('total');


let arr ={
    1:{
        id   : 1,
        name : "license#1",
        price: 13
    },
    2:{
        id   : 2,
        name : "license#2",
        price: 22
    },
    3:{
        id   : 3,
        name : "license#3",
        price: 34
    }
}

forEach.call(licenseValue, function(b){
    b.addEventListener('click', callc)
})

num.oninput=function(){
    let licenseCheck = document.querySelector('input[type="radio"]:checked').value;
    let value = '';
    
    value = num.value * arr[licenseCheck].price;
    
    innerValue(value);
    
}

function callc(){
    let id       = this.value,
        price    = arr[id].price,
        value    = '';
    
    value = price * num.value;
    
    innerValue(value);
    innerTotal(id);
}

function innerValue (a){
    total.innerHTML = "$"+a+"<sup>us</sup>";
}

function innerTotal(a){
    inner.innerHTML = "#"+a;
}

