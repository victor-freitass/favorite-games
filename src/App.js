import styles from './App.module.css';
import Footer from './components/generics/Footer';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header>
        <h1>Meu jogos nostálgicos</h1>
      </header>
      {/* As caixas com os jogos (grid) */}
      <main>
        <section className='games-container'>
          <div id="mario" className={styles.game}>
          <img src="https://pngimg.com/uploads/mario/mario_PNG7.png" alt="mario" className={styles.img} />
            <h3>Nintendo - Mario</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="san-andreas" className={styles.game}>
            <img src="https://pngimg.com/uploads/gta/gta_PNG12.png" alt="san-andreas" className={styles.img} />
            <h3>Nintendo - Mario</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="crash" className={styles.game}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLawPrAwfjlXhDOMehOXVv2DTMHWd7L_a5g&usqp=CAU" alt="crash" className={styles.img} />
            <h3>Nintendo - Mario</h3>
            <p>Um dos jogos que mais joguei...</p>
          </div>
          <div id="minecraft" className={styles.game}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLawPrAwfjlXhDOMehOXVv2DTMHWd7L_a5g&usqp=CAU" alt="minecraft" className={styles.img} />
            <h3>Nintendo - Mario</h3>
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