import { useEffect, useState } from "react";
import { useFilter } from "../utils/hooks/filterHook";
import CustomInput from "../../custom-components/customInput";




export default function RoomFilter({ value, items, onChange }) {
    const [filter, setFilter] = useState(value || {});
    const { filteredData, searchString, setSearchString } = useFilter(items, filter, "rooms");

    useEffect(() => {
        if (searchString === "") return onChange(items);
        const newData = filteredData.filter(r => r.score > 0);
        if (newData.length > 0) return onChange(newData);
        onChange(filteredData);
    }, [filteredData]);

    return (
        <div className="filter column">
            <CustomInput label="Search" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        </div>
    );
}
