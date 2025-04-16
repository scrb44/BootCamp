import { useEffect, useState } from "react";
import "./SideBar.css";

function SideBar() {
    const [altura, setAltura] = useState(window.scrollY);

    useEffect(() => {
        const handleEvent = () => {
            setAltura(window.scrollY);
        };
        window.addEventListener("scroll", handleEvent);

        return () => window.removeEventListener("scroll", handleEvent);
    }, []);

    return <h1 className="sideBarInfo">Altura del sidebar: {altura}</h1>;
}

export default SideBar;
