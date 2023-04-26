import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav_bar_component() {
    const [aberto, setAberto] = useState(false);
    
    return(
        <>
        <h1>Nav component</h1>
        </>
    )
}

export default Nav_bar_component;