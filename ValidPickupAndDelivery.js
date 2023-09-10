var countOrders = function(n) {
     var result = 1;
    let M = 1000000007;
    for (var i = 1; i <= 2 * n; i += 2)
        result = parseInt( ((result * i * (i + 1)) / 2)%M);

    return result;
};