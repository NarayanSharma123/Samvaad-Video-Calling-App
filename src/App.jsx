// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateMeetingRoom from './CreateMeetingRoom';
import Meeting from './Meeting';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateMeetingRoom />} />
                <Route path="/meeting/:roomid" element={<Meeting />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
