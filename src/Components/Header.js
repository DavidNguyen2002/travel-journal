import React from 'react'
import globe from '../Images/globe-icon.svg'

function Header() {
    return (
        <header>
            <img src={globe} />
            <h3>my travel journal.</h3>
        </header>
    )
}

export default Header;