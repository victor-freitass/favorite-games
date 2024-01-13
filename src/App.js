import Footer from './components/layout/Footer';
import randonImg from './images/import/Import';
import styles from './App.module.css';
import LinkToPage from './components/layout/LinkToPage';
import Header from './components/layout/Header';
import ThemeButton from './components/Theme';

function App() {

  return (
    <div className={styles.App} id='principal-div'>
      <Header />
      <main id='mainid'>
        < ThemeButton/>
        <section className='games-container'>
          <div id="mario" className={styles.game}>
            <img src={randonImg('mario')} alt="mario" className={styles.img} />
            <LinkToPage
              link='/mario'
              name="mario"
              value='Nintendo - Mario'
              paragraph="Perfeito. Som, visual, jogo, história, etc. Tudo perfeito."
            />
          </div>

          <div id="san-andreas" className={styles.game}>
            <img src={randonImg('san')} alt="GTA San Andreas" className={styles.img} />
            <LinkToPage
              link='/san'
              name="san"
              value='Rockstar - GTA San Andreas'
              paragraph="Jogo mais jogado de todos. Melhor história dos hames, sem dúvida."
            />
          </div>
          <div id="crash" className={styles.game}>
            <img src={randonImg('crash')} alt="crash" className={styles.img} />
            <LinkToPage
              link='/crash'
              name="crash"
              value='Naughty Dog - Crash Bandicoot'
              paragraph="O melhor jogo da era PS1. O melhor gameplay que já tive."
            />
          </div>
          <div id="minecraft" className={styles.game}>
            <img src={randonImg('minecraft')} alt="minecraft" className={styles.img} />
            <LinkToPage
              link='/mine'
              name="mine"
              value='MOJANG - Minecraft'
              paragraph="O melhor jogo de todos. Infinito e criativo. O melhor no online."
            />
          </div>
          <div id="gtav" className={styles.game}>
            <img src={randonImg('gta')} alt="GTA V" className={styles.img} />
            <LinkToPage
              link='/gtav'
              name="gtaV"
              value='Rockstar - GTA V'
              paragraph="Fantástico para a época, e esperando o 6 em 2025. "
            />
          </div>
          <div id="cs" className={styles.game}>
            <img src={randonImg('cs')} alt="cs" className={styles.img} />
            <LinkToPage
              link='/cs'
              name="cs"
              value='Valve Corporation - CS 1.6'
              paragraph="Clássico, dono das Lan Houses, desafiador demais no Online."
            />
          </div>

          <div id="tkf" className={styles.game}>
            <img src={randonImg('tkf')} alt="The King Of Fighters" className={styles.img} />
            <LinkToPage
              link='/tkf'
              name="tkf"
              value='SNK - The King of Fighters 2002'
              paragraph="Líder do fliperama. O melhor x1 de todos os tempos."
            />
          </div>

          <div id="gc" className={styles.game}>
            <img src={randonImg('gc')} alt="Grand Chase" className={styles.img} />
            <LinkToPage
              link='/gc'
              name="gc"
              value='KOG Studios - Grand Chase'
              paragraph="Também conheci na Lan House, ótimo online 2000s."
            />
          </div>

          <div id="btf" className={styles.game}>
            <img src={randonImg('btf')} alt="Battlefield 4" className={styles.img} />
            <LinkToPage
              link='/btf'
              name="btf"
              value='DICE/EA - Battlefield 4'
              paragraph="O melhor jogo de guerra. História fantástica."
            />
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;