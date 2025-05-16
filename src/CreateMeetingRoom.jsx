// CreateMeetingRoom.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMeetingRoom() {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState(""); // 👈 खाली string से स्टार्ट करो

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomId.trim()) {
            navigate(`/meeting/${roomId}`);
        } else {
            alert("कृपया Room ID दर्ज करें।");
        }
    };

    return (
        <>
        <style>
            {`
            body {
                margin: 0;
                padding: 0;
                background: linear-gradient(to bottom right, #e0f2ff, #cfe0fc);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .container {
                height: 100vh;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .form-box {
                width: 400px;
                padding: 30px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                border: 1px solid #cfe0fc;
            }

            .form-title {
                text-align: center;
                font-size: 24px;
                font-weight: bold;
                color: #1d4ed8;
                margin-bottom: 20px;
            }

            .form-label {
                font-size: 14px;
                color: #333;
                margin-bottom: 8px;
                display: block;
            }

            .form-input {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 14px;
                margin-bottom: 20px;
                outline: none;
                transition: border-color 0.3s ease;
            }

            .form-input:focus {
                border-color: #1d4ed8;
            }

            .form-button {
                width: 100%;
                padding: 12px;
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .form-button:hover {
                background-color: #1e40af;
            }
            `}
        </style>
        
        <div className='container h-screen w-screen flex justify-center items-center bg-gray-100'>
            <form onSubmit={handleSubmit} className="form-box w-[400px] p-5 shadow-lg bg-white rounded">
                <h1 className='text-center text-2xl font-bold mb-4 form-title'><u>Samvaad</u> Video Calling App</h1>
                <div className="mb-5">
                    <label className="form-label block mb-2 text-sm font-medium text-gray-900">Room ID</label>
                    <input
                        type="text"
                        onChange={(e) => setRoomId(e.target.value)}
                        className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                    />
                </div>
                <button type="submit" className="form-button text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm w-full px-5 py-2.5">Join Meeting</button>
            </form>
        </div>
        </>
    );
}

export default CreateMeetingRoom;
