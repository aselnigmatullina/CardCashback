console.log('worked');

const regularPurchases = 100;
const increasedPurchases = 500;
const specialOffersPurchases = 1000;

const regularPurchasesCashback = regularPurchases*0.01;
const increasedPurchasesCashback = increasedPurchases*0.05;
const specialOffersPurchasesCashback = specialOffersPurchases*0.3;

let overallCardCashback = regularPurchasesCashback + increasedPurchasesCashback + specialOffersPurchasesCashback;
let maxCardCashback = 3000;
if (overallCardCashback > maxCardCashback) {
    overallCardCashback = maxCardCashback;
}
console.log(overallCardCashback);
