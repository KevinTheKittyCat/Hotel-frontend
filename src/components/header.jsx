import { Home } from "@mui/icons-material";
import HeaderButton from "./header/headerButton";
import "../styles/header.css"; 







export default function Header() {
    return (
        <header className="nav-bar">
            <HeaderButton Icon={Home} title="Home" to="/"/>
        </header>
    )
}