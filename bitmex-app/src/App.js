import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import DataTable from './components/DataTable';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data); // Verificar los datos obtenidos
      setData(data);
      setFilteredData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (search === '') {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter(item =>
          (item.title && item.title.toLowerCase().includes(search.toLowerCase())) ||
          (item.id && item.id.toString().startsWith(search))
        )
      );
    }
  }, [search, data]);

  return (
    <div className="App">
      <h1>BitMEX Exchange Data</h1>
      <Search search={search} setSearch={setSearch} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;
