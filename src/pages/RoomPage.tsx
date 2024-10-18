import { useParams } from "react-router-dom"
import DefaultWrapper from "../components/deafultWrapper";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import RoomTopBar from "../components/room/top-bar";
import RoomImages from "../components/room/room-images";
import RoomInfo from "../components/room/roomInfo";
import React from "react";
import { RootState } from "../stores/mainStore";



export default function RoomPage() {
    const params = useParams<{ id: string }>();
    
    if (!params.id) {
        return <ErrorPage message={"No Room Found"} />;
    }

    const room = useSelector((state:RootState ) => state.rooms.byId[params.id || ""]);

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