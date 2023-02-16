//step no 1
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step:2
    const dopositeFeild = document.getElementById('deposit-field');
    const newDepositAmount = dopositeFeild.value;

    dopositeFeild.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }

    //step : 3
    const dipositeTotalElemet= document.getElementById('deposite-total');
    const previousDipositeTotal = dipositeTotalElemet.innerText;
    const currentDepositeTotal =  parseFloat(previousDipositeTotal)+parseFloat(newDepositAmount);
    dipositeTotalElemet.innerText = currentDepositeTotal;
    //step: 4
    const balanceTotal = document.getElementById('banace-total');
    const previousBanalceTotal = balanceTotal.innerText;
    const currentBanlanceTotal = parseFloat(previousBanalceTotal)+parseFloat(newDepositAmount)

    balanceTotal.innerText = currentBanlanceTotal;
})