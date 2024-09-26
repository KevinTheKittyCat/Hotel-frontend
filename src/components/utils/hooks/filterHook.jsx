
import { useState, useEffect } from "react";
import { searchObjects } from "../search";


export function useFilter(items=[], filter = {}, key) {
    const searchTerms = filter?.searchTerms || [];
    const keys = filter?.key || [];
    const strict = filter?.strict || false;
    const [filteredData, setFilteredData] = useState(items);
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        if (!items) return;
        let itemsToSearch = items;
        console.log(strict)
        if (strict && strict?.key && strict?.value !== "*") {
            itemsToSearch = items.filter(item => item[strict.key] === strict.value);
        }
        const filteredObjects = searchObjects(itemsToSearch, searchString, searchTerms, keys);
        setFilteredData(filteredObjects);
    }, [items.length, searchString, JSON.stringify(searchTerms), JSON.stringify(keys), JSON.stringify(strict)]);

    return { filteredData, searchString, setSearchString, [key]: filteredData };
}