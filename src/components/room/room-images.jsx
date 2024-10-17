import { Image } from "@mui/icons-material"





export default function RoomImages({ images }) {

    return (
        <div className="room-images-wrapper">
            <div className="more-room-images row">
                <Image /> <p>{images.length}</p>
            </div>
            
            <div className="room-images column">
                {images.map((image, index) => {
                    return (
                        <div className="room-image-wrapper">
                            <img key={index} src={image} alt="room" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}