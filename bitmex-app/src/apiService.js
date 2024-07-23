import axios from 'axios';

export const sendData = async (data) => {
  try {
    await axios.post('http://localhost:3001/api/data', { data });
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
