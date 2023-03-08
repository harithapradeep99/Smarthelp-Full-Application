import React, { useState, useEffect } from "react";


function Progressbar() {

    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => 
                setFilled(prev => prev += 2), 50)
        }
    }, [filled,isRunning]);


  return (
    <div>
        <div className="progress-bar">
            <div className="progress-bar__filler" style={{width: `${filled}%`}}>
                <span className="progress-bar__label">{filled}%</span>
            </div>
            <button className="btn" onClick={() => setIsRunning(true)}>Run</button>
        </div>
    </div>
  )
}

export default Progressbar;