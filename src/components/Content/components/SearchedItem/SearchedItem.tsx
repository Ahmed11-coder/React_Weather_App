import React from 'react'
import { SearchedItemPros } from 'types/types'

export default function SearchedItem({temp, location, text, icon}: SearchedItemPros) {
    return (
        <div className="box flex-bet-center background-blur-8 flex-col arounded-40 border-w2">
            <div className='temp-info flex-center'>
                <img src={icon} alt={text} />
                <span>{temp}&deg;</span>
            </div>
            <div className='location-info'>
                <p>{location}</p>
                <span>{text}</span>
            </div>
        </div>
    )
}
