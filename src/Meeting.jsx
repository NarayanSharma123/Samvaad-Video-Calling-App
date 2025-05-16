// Meeting.jsx
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Meeting() {
    const { roomid } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const initMeeting = async () => {
            const appID = 1913796461; // 👈 अपना ऐप ID
            const serverSecret = "a12c61626ee2cfcc948525813f8a6f78"; // 👈 सीधा कोड में
            const userId = `user-${Date.now()}`;
            const userName = `User-${Math.floor(Math.random() * 1000)}`;

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomid,
                userId,
                userName
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference
                },
            });
        };

        initMeeting();
    }, [roomid]);

    return (
        <div className='w-full h-screen max-w-full overflow-hidden'>
            <div ref={meetingRef} className="w-full h-full"></div>
        </div>
    );
}

export default Meeting;
