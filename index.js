// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(overwrite){
    bestCustomer = overwrite;
}

const leastFavoriteCustomer = 'Rob';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Sam";
}
