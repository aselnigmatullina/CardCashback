console.log('worked');
//regular purchases: 1% cashback 0-1_000
//Increased Cashback purchases: 5% cashback 1_001-10_000
//Special offers purchases: 30% 10_001
const previousPurchases=1000;

const regularPurchases = previousPurchases*0.01;
const increasedCashbackPurchases = previousPurchases*0.05;
const specialOffersPurchases = previousPurchases*0.3;


let bonusesPerOneThousand;
if(previousPurchases>0 && previousPurchases<=1000){
    bonusesPerOneThousand = regularPurchases;
} else if(previousPurchases>10000){
    bonusesPerOneThousand = specialOffersPurchases;
} else{
    bonusesPerOneThousand = increasedCashbackPurchases;
}
console.log(bonusesPerOneThousand);
