import React, { useState } from "react";

// Import icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Import Utilities 
import { SetModeOptionProp } from 'types/types';

// Import Components
import Search from "./components/Search/Search";

// Import Component Styles
import './Header.css'

export default function Header(props: SetModeOptionProp) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="header">
            <div className="search-container flex-col flex-center">
                <div className={`search btn arounded-40 background-blur-3 flex-center ${isOpen && 'searching'}`}>
                    <Search isOpen={isOpen}/>
                    <div className="box flex-center" onClick={() => setIsOpen(!isOpen)}>
                        <SearchOutlinedIcon />
                    </div>
                </div>
                <div className="search-result arounded-40 background-blur-8 flex-col">
                </div>
            </div>
            <button className="dow btn arounded-40 background-blur-3">Download App</button>
            <button className="btn mode arounded-40 background-blur-3 flex-center" onClick={() => props.setMode(!props.mode)}>
                {(props.mode) ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
        </div>
    );
} 