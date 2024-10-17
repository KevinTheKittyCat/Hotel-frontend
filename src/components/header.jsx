import { Bed, Home, Login, ShoppingBag, Support } from "@mui/icons-material";
import HeaderButton from "./header/headerButton";
import "../styles/header.css";







export default function Header() {
    return (
        <header className="nav-bar flex-apart row stretch-width">
            <div className="row">
                <HeaderButton Icon={Home} title="Home" to="/" />
                <HeaderButton Icon={Bed} title="Rooms" to="/rooms" />
                <HeaderButton Icon={ShoppingBag} title="Order" to="/rooms" />
            </div>
            <div className="row">
                <HeaderButton Icon={Support} title="Help" to="/" />
                <HeaderButton Icon={Login} title="Login" to="/" />
            </div>


        </header>
    )
}