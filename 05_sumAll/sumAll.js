const sumAll = function(int1, int2) {
    let sumResult;
    let max;
    let min;

    if ((int1 < 0 || int2 < 0) || ((typeof int1 !== 'number' )|| (typeof int2 !== 'number')) ) {
        return 'ERROR';
    }

    if (int1 >= int2) {
        max = int1;
        min = int2;
        sumResult = min;
    } else {
        max = int2;
        min = int1;
        sumResult = min;
    }

    sumResult = (0.5 * max) * (max + 1);

    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
