import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function BackButton() {
    const navigate = useNavigate();


    return (
        <button className="back-button center row" onClick={() => navigate(-1)}><ArrowBack /> <p>Back</p> </button>
    )
}