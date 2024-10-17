import { useEffect, useState } from "react";
import CustomInput from "../custom-components/customInput";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getRooms } from "../database/rooms";
import RoomCard from "../components/rooms/roomCard";
import "../styles/rooms/rooms.css";
import RoomFilter from "../components/rooms/RoomFilter";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../stores/roomsSlice";




export default function RoomsPage() {
    const { roomsToGet } = useCustomFetch(getRooms, {}, "roomsToGet");

    // Should have been in a hook but didnt have time - and you wanted to see frontend.
    const rooms = useSelector((state) => state.rooms.all);
    const dispatch = useDispatch();

    const [filteredRooms, setFilteredRooms] = useState(rooms);
    const [dates, setDates] = useState({
        fromDate: formatDate(new Date()),
        toDate: formatDate(new Date(new Date().getTime() + (24 * 60 * 60 * 1000 * 7))),
    });

    useEffect(() => {
        // This is a quick fix. - the "roomsToGet" should be fetched in a hook.
        roomsToGet?.forEach(room =>
            dispatch(addRoom({document:{...room}}))
        );
    }, [roomsToGet]);

    return (
        <div className="page column">
            <div className="flex-apart row">
                <div className="date-pickers row">
                    <CustomInput label="From" type="date" value={dates.fromDate} onChange={(e) => setDates({ ...dates, fromDate: e.target.value })} />
                    <CustomInput label="To" type="date" value={dates.toDate} onChange={(e) => setDates({ ...dates, toDate: e.target.value })} />
                </div>
            </div>

            <div className="row column-on-mobile">
                <RoomFilter items={rooms} onChange={(filteredData) => setFilteredRooms(filteredData)} dates={dates}/>
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