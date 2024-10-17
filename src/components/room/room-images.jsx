




export default function RoomImages({ images }) {

    return (
        <div className="room-images column">
            {images.map((image, index) => {
                return <img key={index} src={image} alt="room" />
            })}
        </div>
    )
}