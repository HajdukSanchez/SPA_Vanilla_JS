const Home = () => {
  // We create the template literal
  const view = `
    <div class="Characters">
      <article class="Character-item">
        <a href="#/1/">
          <img scr="image" alt="name">
          <h2>Name</h2>
        </a>
      </article>
    </div>
  `;
  return view;
}
// We export them because we want that other components in JS can use them
export default Home;

