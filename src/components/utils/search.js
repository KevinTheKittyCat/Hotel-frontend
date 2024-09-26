

export function searchObjects(objectArray, searchString, searchTerms, keysToSearch = []) {
    let results = [];

    if (!objectArray) return [];

    for (let object of objectArray) {
        let score = 0;
        let matchesSearchTerms = true;

        // Check if the object keys match the search terms
        if (searchTerms) {
            for (let searchTerm in searchTerms) {
                if (object[searchTerm] !== searchTerms[searchTerm]) {
                    matchesSearchTerms = false;
                    break;
                }
            }
        }

        for (const [key, value] of Object.entries(object)) {
            if (keysToSearch?.length && !keysToSearch.includes(key)) {
                continue;
            }

            const stringValue = checkValue(value);  // Ensure value is a string
            const regEx = new RegExp(searchString, 'ig');
            const match = stringValue.match(regEx);
            if (match) {
                score += Number(match?.length * searchString?.length);  // Increment score based on number of letters matched
            }
        }

        object.score = score;
        results.push(object);
    }

    return sortObjects(results);
}

// Sort the array of objects in descending order based on their score property.
export function sortObjects(objectArray) {
    return objectArray.sort((a, b) => b.score - a.score);
}

// Return an empty string if the value is null or undefined,
// otherwise return the string representation of the value.
function checkValue(value) {

    // If the value is a Date object, format it as a string in the format "dd/mm/yyyy".
    if (value instanceof Date) {
        return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
    }
    return (value === null || value === undefined) ? "" : value.toString();
}


/* Example */
/*
const objA = { name: 'John', age: 25, city: 'New York' };
const objB = { name: 'Jane', age: 30, city: 'London' };
const objC = { name: 'Bob', age: 35, city: 'Paris' };
const objD = { name: 'Bob2', age: new Date, city: '20' };

const objectArray = [objA, objB, objC, objD];

const searchString = '20';

const results = searchObjects(objectArray, searchString);
console.log(results);
*/
