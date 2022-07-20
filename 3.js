
function numberOfBinaryTreeTopologies(n){

    function factorial(n)
    {
        let res = 1;
 
        for (let i = 1; i <= n; ++i)
        {
            res *= i;
        }
 
        return res;
    }
function binomialCoeff(n, k)
    {
        let res = 1;
 
        if (k > n - k)
            k = n - k;

        for (let i = 0; i < k; ++i)
        {
            res *= (n - i);
            res /= (i + 1);
        }
 
        return res;
    }
 

function catalan(n)
    {
         let c = binomialCoeff(2 * n, n);
 
        return c / (n + 1);
    }
    
    let count = catalan(n);
    return count * factorial(n);
}

exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;