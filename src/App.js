import styles from './App.module.css';
import Footer from './components/generics/Footer';

import randonImg from './images/import/Import';

function App() {

  return (
    <div className="App">
      {/* Cabeçalho */}
      <header>
        <h1>Meu jogos nostálgicos</h1>
      </header>
      {/* As caixas com os jogos (grid).*/}
      <main>
        <section className='games-container'>
          <div id="mario" className={styles.game}>
          <img src={randonImg('mario')} alt="mario" className={styles.img} />
            <h3>Nintendo - Mario</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="san-andreas" className={styles.game}>
            <img src={randonImg('san')} alt="GTA San Andreas" className={styles.img} />
            <h3>Rockstar - Gta San Andreas</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="crash" className={styles.game}>
            <img src={randonImg('crash')} alt="crash" className={styles.img} />
            <h3>Naughty Dog - Crash Bandicoot</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="minecraft" className={styles.game}>
            <img src={randonImg('minecraft')} alt="minecraft" className={styles.img} />
            <h3>Mojang/Microsoft - Minecraft</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="gtav" className={styles.game}>
            <img src={randonImg('gta')} alt="GTA V" className={styles.img} />
            <h3>Rockstar - GTA V</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="cs" className={styles.game}>
            <img src={randonImg('cs')} alt="cs" className={styles.img} />
            <h3>Valve Corporation - Counter Strike 1.6 </h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
        </section>
      </main>
      {/* Footer. Dx em componente, pois vai entrar em mts lugares */}
      <Footer />
    </div>
  );
}

export default App;