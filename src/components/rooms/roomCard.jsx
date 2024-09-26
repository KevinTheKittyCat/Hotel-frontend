


/*
    {
        id: 8,
        reference: "A8",
        price: 450,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },    
*/

import { Bed, CurrencyPoundRounded, People } from "@mui/icons-material";

export default function RoomCard({ room }) {
    return (
        <div className="room-card column">
            <img src={room.image} alt={room.name} />
            <div className="room-info column stretch-height flex-apart">
                <div className="column">
                    <h2>{room.name}</h2>
                    <p><People /> Space for {room.capacity}</p>
                    <p className="capitalize"><Bed/>{room.type}</p>
                </div>
                <div className="column">
                    <hr />
                    <p><CurrencyPoundRounded /> {room.price}</p>
                </div>
            </div>
        </div>
    );
}