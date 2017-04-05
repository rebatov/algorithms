console.time('total')
let array = [];
let peak = {
    index: null,
    value: null
};
const n = 1000000000;
const checker = require('./utils/checker.js');
const loader = require('./utils/array.js')


array = loader.array(n);
let len = array.length;
console.log(array.length / 2)
let temp = array;;
let tmp;

// pre check -- middle-out
if (array[Math.floor(len / 2)] < array[Math.floor(len / 2) - 1]) {
    forLooper(0, Math.floor(len / 2) - 1);
} else if (array[Math.floor(len / 2)] > array[Math.floor(len / 2) - 1]) {
    forLooper(Math.floor(len / 2) - 1, len);
} else {
    peak.index = len / 2;
    peak.value = array[len / 2];
    console.log(peak);
    console.timeEnd('total');
}

function forLooper(start, end) {
    for (i = start; i < end; i++) {
        if (checker.check(array[i - 1], array[i])) {
            if (i == end - 1) {
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
}
