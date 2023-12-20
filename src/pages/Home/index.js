import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNum } from '@store/actions';
import Button from '@components/Button'
import { AppContext } from '../App';

function Home() {
    const name = useContext(AppContext)
    const dispatch = useDispatch();
    const num = useSelector((state) => state.num);
    const handleClick = () => {
        dispatch(addNum())
    }
    return (
        <div>{name}{num} <Button text='+' onClick={handleClick} /></div>
    );
}

export default Home;
