import { useNavigate } from "react-router-dom";

export default function Home() {
    
    const navigate = useNavigate();

    return (
        <div className="home page column center stretch-width relative" >
            <div className="home-content column center stretch-width">
                <h1 className="title">Welcome to the Home Page</h1>
                <p className="description">This is a simple home page to get to the Hotel Room List</p>
                <button className="button" onClick={() => navigate("/rooms")}>Go to Rooms</button>
            </div>
        </div>
    );
}
