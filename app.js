console.log('worked');

const currentPurchases = 10100;

const regularPurchases = currentPurchases*0.01;
const increasedCashbackPurchases = currentPurchases*0.05;
const specialOffersPurchases = currentPurchases*0.3;


let cardCashback;
if (currentPurchases > 0 && currentPurchases <= 1000) {
    cardCashback = regularPurchases;
} else if(currentPurchases > 10000) { 
    cardCashback = specialOffersPurchases;
} else {
    cardCashback = increasedCashbackPurchases;
}

if (cardCashback > 3000) {
    cardCashback = 3000;
    console.log("Sorry,but we can't accrue more");
}
console.log(cardCashback);
