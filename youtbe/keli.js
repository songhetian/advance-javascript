
const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `A sandwich with ${ingredient1}, ${ingredient2}, and ${ingredient3}.`
        }
    }
}

const mySandwich = buildSandwich('Bacon')('letters')('Tomato');

console.log(mySandwich);


const curriedMultiply = x => y => x * y;


console.log(curriedMultiply(2)(3));

const updateElementText = id => content => document.getElementById(id).textContent = content;


const updateTitle = updateElementText('title')('title');

console.log(updateTitle);


const curry = (fn) => {
    return curried = (...ages) => {
        if (fn.length !== ages.length) {
            // curried(10)
            // curried(10,20)
            // curried(10,20,30)
            console.log(ages);

            return curried.bind(null, ...ages);
        }
        return fn(...ages);
    }
}

const total = (x, y, z) => x + y + z;


const curriedTotal = curry(total);
console.log(curriedTotal);


console.log(curriedTotal(10)(20)(30));


