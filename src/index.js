// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency <= 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    else {
        let countCoin = {};
        let n;

        n = Math.trunc(currency / 50);
        if (n >= 1) {
            countCoin.H = n;
            currency = currency%50;
        }

        n = Math.trunc(currency / 25);
        if (n >= 1) {
            countCoin.Q = n;
            currency = currency%25;
        }

        n = Math.trunc(currency / 10);
        if (n >= 1) {
            countCoin.D = n;
            currency = currency%10;
        }

        n = Math.trunc(currency / 5);
        if (n >= 1) {
            countCoin.N = n;
            currency = currency%5;
        }

        n = Math.trunc(currency / 1);
        if (n >= 1) {
            countCoin.P = n;
        }
        return countCoin;

    }
}
