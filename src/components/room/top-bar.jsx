import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BackButton from "../utils/backButton";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";







export default function RoomTopBar({ room }) {
    const [liked, setLiked] = useState(localStorage.getItem("likedRooms") ? localStorage.getItem("likedRooms").includes(room.id) : false);
    const navigate = useNavigate();

    useEffect(() => {
        const alreadyLiked = localStorage.getItem("likedRooms") ? JSON.parse(localStorage.getItem("likedRooms")) : [];
       
        // Stringified to keep Array in localStorage.
        if (liked && !alreadyLiked.includes(room.id)) {
            localStorage.setItem("likedRooms", JSON.stringify([...alreadyLiked, room.id]))
        } else if (!liked && alreadyLiked.includes(room.id)) {
            localStorage.setItem("likedRooms", JSON.stringify([...alreadyLiked.filter(id => id !== room.id)]))
        }
    }, [liked])

    return (
        <div className="top-room-bar row flex-apart">
            <BackButton />
            <div className="room-actions row">
                <button className="default-button" onClick={() => setLiked(!liked)}>
                    {liked ? <Favorite /> : <FavoriteBorderOutlined />}
                </button>
                <button className="primary-button" onClick={() => navigate(`/rooms/${room.id}/book`)}>Book</button>
            </div>
        </div>
    )
}