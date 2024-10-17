import { useEffect, useState } from "react";
import CustomInput from "../custom-components/customInput";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getRooms } from "../database/rooms";
import RoomCard from "../components/rooms/roomCard";
import "../styles/rooms/rooms.css";
import RoomFilter from "../components/rooms/RoomFilter";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../stores/roomsSlice";
import DefaultWrapper from "../components/deafultWrapper";
import { GridView, ViewList } from "@mui/icons-material";




export default function RoomsPage() {
    const { roomsToGet } = useCustomFetch(getRooms, {}, "roomsToGet");
    const [list, setList] = useState([]);
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
            dispatch(addRoom({ document: { ...room } }))
        );
    }, [roomsToGet]);

    return (
        <DefaultWrapper>
            <div className="flex-apart row">
                <div className="date-pickers row">
                    <CustomInput label="From" type="date" value={dates.fromDate} onChange={(e) => setDates({ ...dates, fromDate: e.target.value })} />
                    <CustomInput label="To" type="date" value={dates.toDate} onChange={(e) => setDates({ ...dates, toDate: e.target.value })} />
                </div>
                <button className="default-button" onClick={() => setList(old => !list)}> {list ? <ViewList/> : <GridView/>} </button>

            </div>

            <div className="row column-on-mobile">
                <RoomFilter items={rooms} onChange={(filteredData) => setFilteredRooms(filteredData)} dates={dates} />
                <div className="rooms-list row wrap center grid3 stretch-width">
                    {filteredRooms?.map(room => (
                        <RoomCard key={room.id} room={room} list={list} />
                    ))}
                </div>
            </div>

        </DefaultWrapper>
    );
}


const formatDate = (date) => {
    return date.toISOString().split('T')[0];
}