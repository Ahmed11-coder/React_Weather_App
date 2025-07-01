import React, { useState } from "react";

// Import icons
import { Search as SearchIcon, Sun, Moon } from "lucide-react"

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
                <div className={`search btn arounded-40 background-blur-3 flex-bet-center ${isOpen && 'searching'}`}>
                    <Search isOpen={isOpen}/>
                    <div className="box flex-center" onClick={() => setIsOpen(!isOpen)}>
                        <SearchIcon strokeWidth={1} className="icon"/>
                    </div>
                </div>
            </div>
            {/* <button className="dow btn arounded-40 background-blur-3">Download App</button> */}
            <button className="btn mode arounded-40 background-blur-3 flex-center" aria-label="mode" onClick={() => props.setMode(!props.mode)}>
                {(props.mode) ? <Moon strokeWidth={1} className="icon" /> : <Sun strokeWidth={1} className="icon"/>}
            </button>
        </div>
    );
} 