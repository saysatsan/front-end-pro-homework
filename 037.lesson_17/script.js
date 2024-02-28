let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
}

let bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }       
}

const currencyWrapper = document.querySelector('.currency_wrapper');
const moneyWrapper = document.querySelector('.set_money_wrapper');

const errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
currencyWrapper.append(errorMessage);

function getMoney (userData, bankData){

    return new Promise((resolve, reject) => {
        const questionWrapper = document.querySelector('.question_wrapper');
        const answerYes = document.querySelector("#yes");
        const answerNo = document.querySelector("#no");
        
        answerYes.addEventListener('click', () => {
            questionWrapper.remove();
            resolve(userData);
        });
    
        answerNo.addEventListener('click', () => {
            questionWrapper.remove();
            reject({ userData: userData, bankData: bankData });
        });
    })
}

function chooseCurrency(userData) {

    return new Promise((resolve) => {
        function tryChooseCurrency() {
            const labelGetCurrency = document.createElement('label');
            labelGetCurrency.innerText = 'Enter the currency';
            
            const getCurrency = document.createElement('input');
            getCurrency.classList.add("currency");
            getCurrency.type = 'text';
            getCurrency.placeholder = 'USD';
    
            const okButton = document.createElement('button');
            okButton.innerText = 'Enter'; 

            currencyWrapper.append(labelGetCurrency, getCurrency, okButton);
            
            okButton.addEventListener('click', () => {
                const availableCurrencies = Object.keys(userData);
                const currency = document.querySelector(".currency").value.toUpperCase();
                
                if (availableCurrencies.includes(currency)) {
                    currencyWrapper.remove(labelGetCurrency, getCurrency, okButton);
                    errorMessage.textContent = '';
                    resolve(currency);     
                } else {
                    errorMessage.textContent = 'Invalid currency or not available for issuance. Please try again.';

                    labelGetCurrency.remove();
                    getCurrency.remove();
                    okButton.remove();

                    tryChooseCurrency();                                 
                }
            });            
        }
        tryChooseCurrency() ;
    });    
}

function giveCash(bankData) {
    const availableCurrencies = {};

    for (const currency in bankData) {
        if (bankData[currency].max > 0) {
            availableCurrencies[currency] = true;
        }
    };
    
    return new Promise((resolve, reject) => {

        chooseCurrency(availableCurrencies).
        then((currency) => {
            const maxAmount = bankData[currency].max;
            const minAmount = bankData[currency].min;            

            const cashSumInput = document.createElement('input');
            cashSumInput.type = 'number';
            cashSumInput.placeholder = 'Enter the amount';
            
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Withdraw';
    
            const errorMessage = document.createElement('div');
            errorMessage.style.color = 'red';

            moneyWrapper.append(cashSumInput, submitButton, errorMessage);

            submitButton.addEventListener('click', () => {
                const amount = parseFloat(cashSumInput.value);
    
                if (isNaN(amount) || amount < minAmount) {
                    errorMessage.innerText = `Error: The entered amount is less than the allowed minimum. Minimum withdrawal amount: ${minAmount}`; 
                    reject();
                } else if (amount > maxAmount) {
                    errorMessage.innerText = `Error: The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ${maxAmount}`;
                    reject();            
                } else {              
                    const successMessage = document.createElement('div');
                    successMessage.innerText = `Here are your cash ${amount} ${currency} ${bankData[currency].img}`;
                    document.body.append(successMessage);  
                
                    moneyWrapper.removeChild(cashSumInput);
                    moneyWrapper.removeChild(submitButton);
                    moneyWrapper.removeChild(errorMessage);
        
                    resolve();
                };
            });
        });        
    });
}

getMoney (userData, bankData).
    then(
        (data) =>{
            chooseCurrency(data).
            then((currency) => {              
                const balance = userData[currency];
                const balanceMessage = document.createElement('div');
                balanceMessage.classList.add('balanceMessage');
                balanceMessage.textContent = `Balance is: ${balance} ${currency}`;

                document.body.append(balanceMessage);
                console.log(`Balance is: ${balance} ${currency}`);
                
            }).            
            finally(() =>{
                const finallyMessage = document.createElement('div');
                finallyMessage.classList.add('balanceMessage');
                finallyMessage.textContent = 'Thank you, have a nice day';
                
                document.body.append(finallyMessage);
            })
        },
        () => {
            giveCash(userData, bankData).
            then(() => {
                console.log("Withdrawal successful");
            }).
            catch((error) => {
                console.error(error);
            }).
            finally(() =>{
                const finallyMessage = document.createElement('div');
                finallyMessage.textContent = 'Thank you, have a nice day';
                
                document.body.append(finallyMessage);
            })
        }
    ).
    catch((error) => {
        console.error(error);               
    });

