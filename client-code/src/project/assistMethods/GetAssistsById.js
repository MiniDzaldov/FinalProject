import React, { useState } from 'react';
import axios from 'axios';

const GetAssistsById = () => {
  const [id, setId] = useState(''); // State to manage the input ID
  const [data, setData] = useState(null); // State to manage the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  const handleInputChange = (event) => {
    setId(event.target.value); // Update ID state when input changes
  };

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(`http://localhost:5089/api/assists/${id}`); // Fetch data by ID
      setData(response.data); // Set the fetched data to state
    } catch (err) {
      setError(err.message); // Set error message to state
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={handleInputChange}
        placeholder="Enter ID"
      />
      <button onClick={handleFetch} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Data'}
      </button>
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default GetAssistsById;
