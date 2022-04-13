import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Btn() {
    const { toggleTheme } = useContext(GlobalContext);

    return <button onClick={toggleTheme}>toggle</button>;
}

export default Btn;
