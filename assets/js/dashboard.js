let totalDepositAmount = parseInt( document.getElementById("totalDepositAmount").innerText );
let totalWithdrawnAmount = parseInt( document.getElementById("totalWithdrawnAmount").innerText );
let totalAvailableBalance = parseInt( document.getElementById("totalAvailableBalance").innerText );

document.getElementById("depositBtn").addEventListener('click', function() {
    const newDepositAmount = parseInt( document.getElementById("newDepositAmount").value );
    if ( newDepositAmount === "" ) {
        alert("Please enter your amount to deposit!!!");
    } else if ( isNaN(newDepositAmount) ) {
        alert("Deposit amount must be a number!!!");
    } else if ( newDepositAmount < 0 ) {
        alert("Deposit amount must be a postive number!!!");
    } else {
        // All condition passed that means it is a valid number.
        depositAmount(newDepositAmount);
        document.getElementById("newDepositAmount").value = '';
    }
});

document.getElementById("withdrawBtn").addEventListener('click', function() {
    const newWithdrawAmount = parseInt( document.getElementById("newWithdrawAmount").value );
    if ( newWithdrawAmount === "" ) {
        alert("Please enter your amount to withdraw!!!");
    } else if ( isNaN(newWithdrawAmount) ) {
        alert("Withdraw amount must be a number!!!");
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
    totalWithdrawnAmount += newWithdrawAmount;
    balanceAmount( null, newWithdrawAmount);
}

function balanceAmount( deposit, withdraw ) {
    if ( deposit !== null ) {
        totalAvailableBalance += deposit;
        document.getElementById("totalDepositAmount").innerText = totalDepositAmount;
    } else {
        if ( totalAvailableBalance < withdraw ) {
            alert("You can't withdraw more than the available balance!!!");
        } else {
            totalAvailableBalance -= withdraw;
            document.getElementById("totalWithdrawnAmount").innerText = totalWithdrawnAmount;
        }
    }
    document.getElementById("totalAvailableBalance").innerText = totalAvailableBalance;
}