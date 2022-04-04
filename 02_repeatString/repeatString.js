const repeatString = function(string, num) {
    let repStringResult = '';
    
    if (num < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < num; i++) {
        repStringResult += string;
    }
    return repStringResult;
};

// Do not edit below this line
module.exports = repeatString;
