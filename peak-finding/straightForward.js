console.time('total')
let array = [];
let peak = {
    index: null,
    value: null
};

// lenth of the array
const n = 100000000;

const checker = require('./utils/checker.js')
const loader = require('./utils/array.js')

// loading the array beforehand
array = loader.array(n);
let len = array.length;

for (i = 1; i < len; i++) {
    if (checker.check(array[i - 1], array[i])) {
        if (i == array.length - 1) {
            peak.value = array[i];
            peak.index = i;
            console.log(peak);
            console.timeEnd('total');
            return;
        } else {
            if (!checker.check(array[i], array[i + 1])) {
                peak.value = array[i];
                peak.index = i;
                console.log(peak);
                console.timeEnd('total');
                return;
            }
        }
    }
}
