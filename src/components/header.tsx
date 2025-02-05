import React, { EventHandler } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
interface Props {
    setMode: (val: boolean) => void;
    mode: boolean;
}

export default function Header(props: Props) {

    function clickHandle(e: React.MouseEvent<HTMLDivElement>):void {
        if (e.target.tagName != "INPUT") {
            let states = e.currentTarget.classList.toggle("searching");
            e.currentTarget.children[0].value = "";
            if (states) e.currentTarget.children[0].focus();
        }
    }

    return (
        <div className="header">
            <div className="search btn" onClick={(e) => clickHandle(e)}>
                <input type="text" className="search-bar" autoFocus/>
                <SearchOutlinedIcon />
            </div>
            <button className="dow btn">Download App</button>
            <button className="btn mode" onClick={() => props.setMode(!props.mode)}>
                {props.mode && <DarkModeIcon />}
                {!props.mode && <LightModeIcon />}
            </button>
        </div>
    );
} 