import { useState } from "react";
import CustomInput from "../custom-components/customInput";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getRooms } from "../database/rooms";
import RoomCard from "../components/rooms/roomCard";
import "../styles/rooms/rooms.css";
import RoomFilter from "../components/rooms/RoomFilter";




export default function RoomsPage() {
    const { rooms } = useCustomFetch(getRooms, {}, "rooms");
    const [filteredRooms, setFilteredRooms] = useState(rooms);
    const [dates, setDates] = useState({
        fromDate: formatDate(new Date()),
        toDate: formatDate(new Date()),
    });

    return (
        <div className="page column">
            <div className="flex-apart row">
                <div className="date-pickers row">
                    <CustomInput label="From" type="date" value={dates.fromDate} onChange={(e) => setDates({ ...dates, fromDate: e.target.value })} />
                    <CustomInput label="To" type="date" value={dates.toDate} onChange={(e) => setDates({ ...dates, toDate: e.target.value })} />
                </div>
            </div>

            <div className="row column-on-mobile">
                <RoomFilter items={rooms} onChange={(filteredData) => setFilteredRooms(filteredData)} />
                <div className="rooms-list row wrap center grid3 stretch-width">
                    {filteredRooms?.map(room => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>

        </div>
    );
}


const formatDate = (date) => {
    return date.toISOString().split('T')[0];
}