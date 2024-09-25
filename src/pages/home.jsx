/* Logos */
import Logo from "../assets/template/logo-animated.svg?react";
import ReactLogo from "../assets/template/react.svg?react";
import ViteLogo from "../assets/template/vite.svg?react";
import MaterialUILogo from "../assets/template/material-ui.svg?react";
import ReactRouterLogo from "../assets/template/react-router-mark-color-inverted.svg?react";
import BrandPattern from "../assets/template/brand_pattern.svg?react";

/* Components */
import { useEffect, useState } from "react";
import { Popover } from "@mui/material";


export default function Home() {
    // Cursor position update :root style
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", updateCursorPosition);
        return () => window.removeEventListener("mousemove", updateCursorPosition);
    }, []);

    useEffect(() => {
        console.log(cursorPosition);
        console.log(window.innerWidth);
        console.log(cursorPosition.x / window.innerWidth * 100 + "%");
        document.documentElement.style.setProperty("--cursor-position-x", cursorPosition.x / window.innerWidth * 100 + "%");
        document.documentElement.style.setProperty("--cursor-position-y", cursorPosition.y / window.innerHeight * 100 + "%");
    }, [cursorPosition]);

    return (
        <div className="home page column center stretch-width relative" >

            <Logo className={"animated-frontivia-logo"} style={{ width: "60%" }} />
            <h1>Frontivia Template</h1>

            <div className="frontivia-template-background">
                <BrandPattern/>
            </div>

            <div className="row center" style={{ gap: 40 }}>
                <button className="frontivia-template-button row center waves-hover" onClick={() => window.open("https://reactjs.org/")}>
                    <ReactLogo style={{ width: 82, height: 82 }} />
                    <h2>React</h2>
                </button>

                <button className="frontivia-template-button row center waves-hover" onClick={() => window.open("https://vitejs.dev/")}>
                    <ViteLogo style={{ width: 82, height: 82 }} />
                    <h2>Vite</h2>
                </button>

                <button className="frontivia-template-button row center waves-hover" onClick={() => window.open("https://mui.com/material-ui/getting-started/")}>
                    <MaterialUILogo style={{ width: 82, height: 82 }} />
                    <h2>Material-UI</h2>
                </button>

                <button className="frontivia-template-button row center waves-hover" onClick={() => window.open("https://reactrouter.com/en/main/start/tutorial")}>
                    <ReactRouterLogo style={{ width: 82, height: 82 }} />
                    <h2>React Router</h2>
                </button>

            </div>
        </div>
    );
}
