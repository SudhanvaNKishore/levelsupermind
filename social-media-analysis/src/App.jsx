import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

import image from './components/Images/image.png';

function App() {
    const [file, setFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleChatBotClick = () => {
        window.open('https://team-echo-levelsupermind.streamlit.app/', '_blank');
    };

    const handleAnalysisClick = () => {
        window.open('https://team-echo-levelsupermind.streamlit.app/', '_blank');
    };

    return (
        <div>
            <nav>
                <div className="nav-section">Social Media Analysis</div>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={handleChatBotClick}>ChatBot</button>
                    <button className="nav-button" onClick={handleAnalysisClick}>Analysis</button>
                </div>
            </nav>
            <div className="content">
                <img src={image} alt="Description of the image" className="image" />
                <div className="description">
                    <h2>Social Media Performance Analysis</h2>
                    <p>We built a Social Media Performance Analysis module using Langflow, DataStax Astra DB, Streamlit, and React+Vite. Engagement data, including likes, shares, and comments for post types like carousel, reels, and static images, was simulated and stored in Astra DB. Langflow was used to create a workflow that queries this data and calculates average engagement metrics. GPT integration helped generate insights such as "Reels drive 2x more comments." Streamlit and React+Vite were used for an interactive and dynamic frontend experience.</p>
                </div>
            </div>
            <div className="upload-box" {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="file-label">Upload File</label>
                {file && <p>File: {file.name}</p>}
                <p>Drag and drop a file here or click to upload</p>
            </div>
            <p className="copyright">©2025 Social Media Performance Analysis. All rights reserved.</p>
        </div>
    );
}

export default App;
