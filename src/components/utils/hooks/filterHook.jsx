
import { useState, useEffect } from "react";
import { searchObjects } from "../search";


export function useFilter(items = [], filter = {}, key) {
    const searchTerms = filter?.searchTerms || [];
    const keys = filter?.key || [];
    const strict = filter?.strict || [];
    const [filteredData, setFilteredData] = useState(items);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        if (!items) return;
        let itemsToSearch = [...items];
        console.log(itemsToSearch);

        strict.forEach(({ key, operator = "===", value }) => {
            console.log(key, operator, value);
            itemsToSearch = itemsToSearch.filter(item => {
                return checkOperator(value, operator, item, key);
            });
        });
        const filteredObjects = searchObjects(itemsToSearch, searchString, searchTerms, keys);
        setFilteredData(old => filteredObjects);
    }, [items.length, searchString, JSON.stringify(searchTerms), JSON.stringify(keys), JSON.stringify(filter)]);

    return { filteredData, searchString, setSearchString, [key]: filteredData };
}

const checkOperator = (value, operator, item, key) => {
    if (operator === "===") return item[key] === value;
    if (operator === "!==") return item[key] !== value;
    if (operator === ">") return item[key] > value;
    if (operator === "<") return item[key] < value;
    if (operator === ">=") return item[key] >= value;
    if (operator === "<=") return item[key] <= value;
    if (operator === "includes") return item[key].includes(value);
    if (operator === "startsWith") return item[key].startsWith(value);
    if (operator === "endsWith") return item[key].endsWith(value);
    return true;
}

