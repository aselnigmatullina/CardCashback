console.log('worked');

const currentPurchases = 10100;

const regularPurchases = currentPurchases*0.01;
const increasedCashbackPurchases = currentPurchases*0.05;
const specialOffersPurchases = currentPurchases*0.3;


let bonusesFromThePurchase;
if (currentPurchases > 0 && currentPurchases <= 1000) {
    bonusesFromThePurchase = regularPurchases;
} else if(currentPurchases > 10000) { 
    bonusesFromThePurchase = specialOffersPurchases;
} else {
    bonusesFromThePurchase = increasedCashbackPurchases;
}

if (bonusesFromThePurchase > 3000) {
    bonusesFromThePurchase = 3000;
    console.log("Sorry,but we can't accrue more");
}
console.log(bonusesFromThePurchase);
