// we import router file
import router from './routes';

// With this we can add a listener that is going to help us to know when a route changed
window.addEventListener('load', router);
// This event listener is going to listen the routes and hash changes
window.addEventListener('hashchange', router);