import React, {useContext} from "react";
import Btn from '../components/Btn';
import { GlobalContext } from '../context/globalContext';

function Header() {
    const { userInfos } = useContext(GlobalContext);

    return (
        <>
            <h1>welcome to my app : intro api context</h1>
            <nav>
                <a href="">home</a>
            
                <a href="">blog</a>
                <a href="">login</a>
            </nav>
            <Btn />
        </>
    );
}

export default Header;
