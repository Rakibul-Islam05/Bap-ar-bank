document.getElementById('btn-wrihdraw').addEventListener('click',function(){
    const withdrowFeild = document.getElementById('wrihdraw-feild');
    const newWithdrawAmount =withdrowFeild.value;

    withdrowFeild.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrowTotalElement = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalAmount = withdrowTotalElement.innerText;

    const totalBalancElement= document.getElementById('banace-total');
    totalBalace = totalBalancElement.innerText;

    if(parseInt(newWithdrawAmount) > parseFloat(totalBalace)){
        alert('insucient balance!')
        return;
    }
    
    const currentWithdrawTotal = parseFloat(PreviousWithdrawTotalAmount)+parseFloat(newWithdrawAmount)
    withdrowTotalElement.innerText = currentWithdrawTotal;

    const currentBanlance = parseFloat(totalBalace)-parseFloat(newWithdrawAmount)
    totalBalancElement.innerText = currentBanlance;
    
})