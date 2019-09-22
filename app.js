console.log('worked');
//regular purchases: 1% cashback 0-1_000
//Increased Cashback purchases: 5% cashback 1_001-10_000
//Special offers purchases: 30% 10_001


const previousPurchases=1000;

let bonusesPerOneThousand;
if(previousPurchases>0 && previousPurchases<=1000){
    bonusesPerOneThousand = previousPurchases*0.01;
} else if(previousPurchases>10000){
    bonusesPerOneThousand = previousPurchases*0.3;
} else{
    bonusesPerOneThousand = previousPurchases*0.05;
}
