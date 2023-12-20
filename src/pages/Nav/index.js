import React, { useContext } from 'react';
import { AppContext } from '../App';
import './index.less';

function Nav() {
    const name = useContext(AppContext)
    return (
        <div>{name}</div>
    );
}

export default Nav;
