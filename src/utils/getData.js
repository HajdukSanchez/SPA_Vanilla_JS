const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  // If there is and ID, this const is going to have another URL
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json(); // Change response to a JSON data object
    return data;
  } catch (error) {
    console.error('Fecth Error:', error);
  }
};

export default getData;