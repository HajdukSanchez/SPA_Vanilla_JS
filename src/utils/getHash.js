// This is the function that gave us the hash of the component
// The second option help us that in case the hash dont have a value, you are going to navigate to the root path
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;