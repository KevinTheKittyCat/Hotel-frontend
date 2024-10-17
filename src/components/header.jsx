import { Bed, Home, Login, ShoppingBag, Support } from "@mui/icons-material";
import HeaderButton from "./header/headerButton";
import "../styles/header.css";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/base";







export default function Header() {
    // Languague should be set in redux store.
    const [lang, setLang] = useState("english");

    const handleChange = (event) => {
        setLang(event.target.value);
    }

    return (
        <header className="nav-bar flex-apart row stretch-width">

            <div className="row">
                <HeaderButton Icon={Home} title="Home" to="/" />
                <HeaderButton Icon={Bed} title="Rooms" to="/rooms" />
                <HeaderButton Icon={ShoppingBag} title="Order" to="/rooms" />
            </div>
            <div className="row center">
                <FormControl size="small">
                    <Select
                        labelId="Language"
                        id="language"
                        value={lang}
                        label="Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={"english"}>EN</MenuItem>
                        <MenuItem value={"norwegian"}>NO</MenuItem>
                        <MenuItem value={"german"}>GE</MenuItem>
                    </Select>
                </FormControl>
                <HeaderButton Icon={Support} title="Help" to="/" />
                <HeaderButton Icon={Login} title="Login" to="/" />
            </div>


        </header>
    )
}