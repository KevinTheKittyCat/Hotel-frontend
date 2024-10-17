import { useParams } from "react-router-dom"
import { useCustomSingleFetch } from "../components/utils/hooks/fetchSingle";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getBookingsById, getRoomById } from "../database/rooms";
import DefaultWrapper from "../components/deafultWrapper";






export default function RoomPage() {
    const params = useParams();
    const { data } = useCustomSingleFetch(getRoomById, params.id);
    const { bookings } = useCustomFetch(getBookingsById, params.id, "bookings");

    return (
        <DefaultWrapper>
            <div>
                <h1>Room</h1>
            </div>
        </DefaultWrapper>
    )
}