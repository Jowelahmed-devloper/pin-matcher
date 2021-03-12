function getPin(){
    const random = Math.random() *10000;
    const pin = (random + '').split('.')[0]
    if(pin.length ===4){
        return pin;
    }
    else{
        return getPin();
    }
}


document.getElementById('pinGenerate').addEventListener('click', function(){
    const pinInput = document.getElementById('pinInput')
    pinInput.value = getPin();
    
})

// Control Calculator

const pinInput = document.getElementById('digitsContainer').addEventListener('click', function(event){
    const digit  = event.target.innerText;
    if(isNaN(digit)){
        // 
    }
    else{
        const pinInput = document.getElementById('typedInput');
        pinInput.value = pinInput.value + digit;
    }
})

//  Verify Pin
document.getElementById('submitPin').addEventListener('click',function(){
    const pin = document.getElementById('pinInput').value;
    const typedPin = document.getElementById('typedInput').value;

    if(pin === typedPin){
        const correct = document.getElementById('correctPin');
        correct.style.display = 'block';
    }
    else{
        const inCorrect = document.getElementById('incorrectPin');
        inCorrect.style.display = 'block';
    }
})




















// function getPin(){
//     const random = Math.random() *10000;
//     const pin = (random + '').split('.')[0]
//     if(pin.length ===4){
//         return pin;
//     }
//     else{
//         return getPin();
//     }
// }

// // Pin Generated 
// document.getElementById('pinGenerate').addEventListener('click',function(){
//     const pinInput = document.getElementById('pinInput');
//     pinInput.value = getPin();
// })

// const inputPin = document.getElementById('digitsContainer').addEventListener('click', function(event){
//     const digit = event.target.innerText;
//     if(isNaN(digit)){
//         // 
//     }
//     else{
//         const typedPin = document.getElementById('typedInput');
//         typedPin.value = typedPin.value + digit;
//     }
// })

// // Verify Pin

// document.getElementById('submitPin').addEventListener('click', function(){
//     const pin = document.getElementById('pinInput').value;
//     const typedPin = document.getElementById('typedInput').value;

//     if(pin === typedPin){
//         const correct = document.getElementById('correctPin');
//         correct.style.display = 'block';
//     }
//     else{
//         const inCorrect = document.getElementById('incorrectPin');
//         inCorrect.style.display = 'block';
//     }

// })
