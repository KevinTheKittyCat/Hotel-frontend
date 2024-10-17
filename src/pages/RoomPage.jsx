import { useParams } from "react-router-dom"
import { useCustomSingleFetch } from "../components/utils/hooks/fetchSingle";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getBookingsById, getRoomById } from "../database/rooms";
import DefaultWrapper from "../components/deafultWrapper";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";






export default function RoomPage() {
    const params = useParams();
    const room = useSelector((state) => state.rooms.byId[params.id]);

    if (!room) return <ErrorPage message={"The Room you are looking for does not exist"} />
    return (
        <DefaultWrapper>
            <div>
                <h1>Room</h1>
            </div>
        </DefaultWrapper>
    )
}