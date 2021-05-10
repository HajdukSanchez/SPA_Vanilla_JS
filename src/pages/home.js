import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  // We create the template literal
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
        `).join('')}
    </div>
  `;
  return view;
}
// We export them because we want that other components in JS can use them
export default Home;

