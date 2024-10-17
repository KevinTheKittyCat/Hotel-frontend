import { useNavigate, useParams } from "react-router-dom"
import { useCustomSingleFetch } from "../components/utils/hooks/fetchSingle";
import { useCustomFetch } from "../components/utils/hooks/fetchHook";
import { getBookingsById, getRoomById } from "../database/rooms";
import DefaultWrapper from "../components/deafultWrapper";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import BackButton from "../components/utils/backButton";
import { Favorite } from "@mui/icons-material";
import { useEffect, useState } from "react";
import RoomTopBar from "../components/room/top-bar";
import RoomImages from "../components/room/room-images";
import RoomInfo from "../components/room/roomInfo";



export default function RoomPage() {
    const params = useParams();
    const room = useSelector((state) => state.rooms.byId[params.id]);
    const navigate = useNavigate();

    const images = ["https://picsum.photos/300/200", ...Array(10).fill("https://picsum.photos/200/300")];

    if (!room) return <ErrorPage message={"The Room you are looking for does not exist"} />
    return (
        <DefaultWrapper>
            <RoomTopBar room={room} />
            <RoomImages images={images} />
            <RoomInfo room={room} />
        </DefaultWrapper>
    )
}