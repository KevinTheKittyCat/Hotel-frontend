import { useEffect, useState } from "react";
import { useFilter } from "../utils/hooks/filterHook";
import CustomInput from "../../custom-components/customInput";




export default function RoomFilter({ value, items, onChange, dates }) {
    const [filter, setFilter] = useState(value || {
        strict: [
            { key: "capacity", operator: ">=", value: 0 },
        ],
    });
    const { filteredData, searchString, setSearchString } = useFilter(items, filter, "rooms");

    useEffect(() => {
        onChange(filteredData);
    }, [filteredData]);

    useEffect(() => {
        setStrictValue("fromDate", ">=", dates.fromDate);
        setStrictValue("toDate", "<=", dates.toDate);
    }, [dates]);

    const setStrictValue = (key, operator, value) => {
        setFilter(old => {
            const removeOldFilter = old.strict.filter(f => f.key !== key);
            return { ...old, strict: [...removeOldFilter, { key, operator, value }] }
        });
        console.log(filter);
    }

    return (
        <div className="filter column">
            <CustomInput label="Room Name" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <CustomInput label="Capacity" type="number" onChange={(e) => setStrictValue("capacity", ">=", e.target.value)} />
        </div>
    );
}
