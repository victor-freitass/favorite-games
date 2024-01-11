import { marioCoin, marioBox } from '../../images/import/Import';
import { useRef, useEffect } from 'react';
import coinSound from './coinSound.mp3';
import styles from './Header.module.css'

function Header() {

    const ref = useRef(null);

    let boxHeader
    useEffect(() => {
        boxHeader = ref.current;
    }, []);

    function showCoin() {
        const audio = new Audio(coinSound);
        audio.volume = 0.2;
        audio.play();
        boxHeader.setAttribute('src', marioCoin);
            setTimeout(() => {
                boxHeader.setAttribute('src', marioBox);
            }, 150);
    }

    return (
        <header>
            <h1>My Nostalgic Games
                <img
                    src={marioBox}
                    alt="Mario Mistery Box"
                    id={styles.imgHeader}
                    ref={ref}
                    onClick={showCoin}
                />
            </h1>
        </header>
    )
}

export default Header;