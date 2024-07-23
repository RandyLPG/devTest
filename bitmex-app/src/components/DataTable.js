import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Link</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="5" className="no-data">No data available</td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td className="content-cell">{item.content}</td>
              <td><a href={item.link} target="_blank" rel="noopener noreferrer">Link</a></td>
              <td>{new Date(item.date).toLocaleString()}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
