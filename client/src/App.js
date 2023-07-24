import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState('');
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/primes`, { params: { number } });
      let data = response.data;

      setData(`[${data.join(', ')}]`);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleBackspace = (e) => {
    if (e.keyCode === 8) {
      setData('')
    }
  }

  const handleOnChange = (e) => {
    setData('');
    setNumber(e.target.value)
  }

  return (
    <div className="App">
      <div className="box">
        <input
          type="number" 
          value={number} 
          onChange={handleOnChange}
          onKeyDown={handleBackspace}
        />
        <button onClick={fetchData}>
          Get Prime Medians
        </button>
          <div>
            <h3>The Prime Medians less than <span>{data ? number : null}</span>:</h3>
            <p>{data}</p>
          </div>
        </div>
    </div>
  );
}

export default App;