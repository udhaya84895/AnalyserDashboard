import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { name: 'Section 1', value: 4000 },
        { name: 'Section 2', value: 3000 },
        { name: 'Section 3', value: 2000 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAnalyzeClick = () => {
        alert(`Analyzing: ${searchTerm}`);
    };

    return (
        <main className='main-container'>
            {/* Search Bar and Analyze Button */}
            <div className='search-bar-container'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Paste URL of the video that you need to analyze...."
                    className="search-bar"
                />
                <button
                    onClick={handleAnalyzeClick}
                    className="analyze-button"
                >
                    Analyze
                </button>
            </div>

            {/* Title Section */}
            <div className='title-section'>
            <h2 className="center-text">Video title..........</h2>
            </div>
            <div className='title-section'>
                <h2>Analysis Results</h2>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>POSITIVE</h3>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NEGATIVE</h3>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>NEUTRAL</h3>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TOTAL</h3>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            {/* Pie Chart */}
            <div className='charts'>
                <ResponsiveContainer width="200%" height={500}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
