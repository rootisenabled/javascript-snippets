const original = {
    a: 1,
    b: true,
    d: false,
    e: 'string in object',
    f: {
        g: [2, 3, 4, 5, 6]
    }, 
    h: null
};

const cloned = (JSON.parse(JSON.stringify(original)));

//but if object has functions or DOM manipulations we need to use recursive method

function clone(obj) {
    if (typeof(obj) !== 'object'|| obj === null || 'isClone' in obj)
        return obj;
    
    var temp = obj.constructor();

    for (var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isClone'] = null;
            temp.key = clone(obj[key]);
            delete obj['isClone'];
        }
    }

    return temp;
}