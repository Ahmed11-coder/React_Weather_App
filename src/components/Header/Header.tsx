import React from "react";

// Import icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { SetModeOptionProp } from '../../types/types';
import { SearchBtn } from "./Handlers.ts";

import './Header.css'

export default function Header(props: SetModeOptionProp) {
    return (
        <div className="header">
            <div className="search btn" onClick={(e) => SearchBtn(e)}>
                <input type="text" className="search-bar" autoFocus/>
                <SearchOutlinedIcon />
            </div>
            <button className="dow btn">Download App</button>
            <button className="btn mode" onClick={() => props.setMode(!props.mode)}>
                {(props.mode) ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
        </div>
    );
} 