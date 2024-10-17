import { useEffect, useState } from "react";
import { useFilter } from "../utils/hooks/filterHook";
import CustomInput from "../../custom-components/customInput";
import { Slider } from "@mui/base";
import { Box } from "@mui/system";

function valuetext(value) {
    return `${value}`;
}

/**
 * 
 * @param {object} props - The props object
 * @param {object} props.value - The value to filter by
 * @param {array} props.items - The items to filter
 * @param {function} props.onChange - The function to call when the items are filtered
 * @param {object} props.dates - The dates to filter by - Specifically used to filter rooms by availability
**/
export default function RoomFilter({ value, items, onChange, dates }) {
    const [sliderValue, setSliderValue] = useState([20, 37]);
    const minDistance = 10;
    const [filter, setFilter] = useState(value || {
        strict: [
            { key: "capacity", operator: ">=", value: 0 },
        ],
    });
    const { filteredData, searchString, setSearchString } = useFilter(items, filter, "rooms");

    useEffect(() => {
        // Send the filtered data back to the parent component
        onChange(filteredData);
    }, [filteredData]);

    /* Removed till Bookings are implemented.
    useEffect(() => {
        // Set the dates in the filter - Used to filter rooms by availability
        setStrictValue("fromDate", ">=", dates.fromDate);
        setStrictValue("toDate", "<=", dates.toDate);
    }, [dates]);
    */

    // Set a strict value in the filter - strict values are used to filter rooms by exact values
    const setStrictValue = (key, operator, value) => {
        setFilter(old => {
            const removeOldFilter = old.strict.filter(f => f.key !== key);
            return { ...old, strict: [...removeOldFilter, { key, operator, value }] }
        });
        console.log(filter);
    }

    const handleSliderChange = (
        event,
        newValue,
        activeThumb
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSliderValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setSliderValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    

    return (
        <div className="filter column">
            <CustomInput label="Room Name" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <CustomInput label="Capacity" type="number" onChange={(e) => setStrictValue("capacity", ">=", e.target.value)} />
            {/*<Box sx={{ width: 300 }}>
                <Slider

                    getAriaLabel={() => 'Minimum distance'}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={2000}
                    max={100000}
                />
            </Box>
            */}
        </div>
    );
}
