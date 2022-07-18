function maxProfitWithKTransactions(prices,k)
{
    if(prices.length <= 1 || !k) return 0
    
    const dp = [...Array(k+1)].map(() => Array(prices.length).fill(0));
    
    for(let r = 1; r < dp.length; r++) {
        for(let c = 1; c < dp[0].length; c++) {
            dp[r][c] = dp[r][c-1];
            for(let m = 0; m < c; m++) {
                dp[r][c] = Math.max(dp[r][c], prices[c] - prices[m] + dp[r-1][m])
            }
        }
    }
    return dp[k][prices.length-1]
}

exports.maxProfitWithKTransactions = maxProfitWithKTransactions;

//Neeraj Goyal
//ngoyal2_be20@thapar.edu