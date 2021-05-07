// This is the function that is going to gave us the option to resolve the route that the user is going to navigate
const resolveRoutes = (route) => {
  if (route.length <= 3) { // This is because in the API we dont have more than 1000 characters
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; // this is going to gave us /about for example
}

export default resolveRoutes;