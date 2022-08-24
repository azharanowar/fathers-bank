let totalDepositAmount = parseFloat( document.getElementById("totalDepositAmount").innerText );
let totalWithdrawnAmount = parseFloat( document.getElementById("totalWithdrawnAmount").innerText );
let totalAvailableBalance = parseFloat( document.getElementById("totalAvailableBalance").innerText );

document.getElementById("depositBtn").addEventListener('click', function() {
    const newDepositAmount = parseFloat( document.getElementById("newDepositAmount").value );
    if ( isNaN(newDepositAmount) ) {
        alert("Deposit amount must be a number and can't be empty!!!");
    } else if ( newDepositAmount < 0 ) {
        alert("Deposit amount must be a postive number!!!");
    } else {
        // All condition passed that means it is a valid number.
        depositAmount(newDepositAmount);
        document.getElementById("newDepositAmount").value = '';
    }
});

document.getElementById("withdrawBtn").addEventListener('click', function() {
    const newWithdrawAmount = parseFloat( document.getElementById("newWithdrawAmount").value );
    if ( isNaN(newWithdrawAmount) ) {
        alert("Withdraw amount must be a number and can't be empty!!!");
    } else if ( newWithdrawAmount < 0 ) {
        alert("Withdraw amount must be a postive number!!!");
    } else {
        // All condition passed that means it is a valid number.
        withdrawAmount(newWithdrawAmount);
        document.getElementById("newWithdrawAmount").value = '';
    }
});


function depositAmount( newDepositAmount ) {
    totalDepositAmount += newDepositAmount;
    balanceAmount( newDepositAmount, null );
}

function withdrawAmount( newWithdrawAmount ) {
    if ( totalAvailableBalance < newWithdrawAmount ) {
        alert("You can't withdraw more than the available balance!!!");
    } else {
        totalWithdrawnAmount += newWithdrawAmount;
        balanceAmount( null, newWithdrawAmount);
    }
}

function balanceAmount( deposit, withdraw ) {
    if ( deposit !== null ) {
        totalAvailableBalance += deposit;
        document.getElementById("totalDepositAmount").innerText = totalDepositAmount;
    } 
    if ( withdraw !== null ) {
        totalAvailableBalance -= withdraw;
        document.getElementById("totalWithdrawnAmount").innerText = totalWithdrawnAmount;
    }
    document.getElementById("totalAvailableBalance").innerText = totalAvailableBalance;
}