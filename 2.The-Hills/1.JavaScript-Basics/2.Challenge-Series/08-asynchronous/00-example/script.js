/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */
//https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee

(() => {
    const setupIntervalMessage = (label, delay) => {
        let count = 0;
        return setInterval(() => console.log(`${label}:`, ++count), delay);
    };

    let intervals = [];

    document.getElementById("run").addEventListener("click", () => {
        if (intervals.length) {
            intervals = intervals.filter(clearInterval);
            console.clear();
        }

        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
})();
