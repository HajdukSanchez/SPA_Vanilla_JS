// Document for managing the routes

// We import the templates and the pages
// As a good technique we not use the extensions of our files
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// We create a element that is going to have the routes like in Angular
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact', // Here beacuse we dont have a element call contact we use a litearl an this is going to gave us a error404
}

// There is we are going to stabilsh our templates to an DOM element
// We use async because we need the navigation for continue with pur process
const router = async () => {
  // Elements for render
  const header = null || document.getElementById('header'); // We get the DOM element, and if we not find the element the const is going to have the value NULL
  const content = null || document.getElementById('content');

  // We add the Header with AWAIT, because we used ASYNC in the function sign.
  header.innerHTML = await Header();

  let hash = getHash(); // We got the hash
  let route = await resolveRoutes(hash); // We resolve the route that the user use
  let render = routes[route] ? routes[route] : Error404; // This function is going to have an function so when we used it we need to use like a function

  content.innerHTML = await render(); // We render the path
}

export default router;
