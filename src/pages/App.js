import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNum } from '@store/actions';
import Button from '@components/Button'
import Nav from './Nav'
import './App.less';

export const AppContext = createContext(null);

function App() {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.num);
    const handleClick = () => {
        dispatch(addNum())
    }
    return (
        <AppContext.Provider value="hello">
            <div className="App">
                <Nav />
                {num} <Button text='+' onClick={handleClick} />
            </div>
        </AppContext.Provider>

    );
}

export default App;
