import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ButtonDisplay from './views/ButtonDisplay';
import RacerDisplay from './views/RacerDisplay';

function App() {
    let name = 'Eren';

    return (
        <div className="App">
            <Navbar username={name} city={"Cotati"}/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ButtonDisplay name={name} />} />
                    <Route path='/racers' element={<RacerDisplay />} />
                </Routes>
                
            </div>
        </div>
    );
}

export default App;