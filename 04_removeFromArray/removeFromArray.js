const removeFromArray = function(arr, ...arg) {
    arr = arr.filter(item => !arg.includes(item));
    
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
