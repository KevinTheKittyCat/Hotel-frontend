


/*{
    id: 8,
    reference: "A8",
    price: 450,
    type: "suite",
    image: "https://via.placeholder.com/150",
    description: "A room near the sea, with a beautiful view",
    capacity: 2,
    name: "Romslig suite",
},   */

export default function RoomInfo({ room: { description, name } }) {




    return (
        <div className="room-info column">
            <h1>{name}</h1>
            <p>{description}</p>

        </div>
    )
}