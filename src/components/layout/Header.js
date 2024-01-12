import { marioCoin, marioBox, marioRunning, marioTwoFingers } from '../../images/import/Import';
import { useRef, useEffect } from 'react';
import coinSound from './coinSound.mp3';
import styles from './Header.module.css'

function Header() {

    const ref = useRef(null);
    const marioRef = useRef(null);

    let boxHeader;
    useEffect(() => {
        boxHeader = ref.current;
        }, []);

    let marioHeader; 
    useEffect(() => {
        marioHeader = marioRef.current;
    }, []);

    let pixel = 467; 
    const interval = setInterval(() => {
        if (marioHeader) {
            pixel--;
            marioHeader.style.right = pixel + 'px';
        }
    }, 50);

    setTimeout(() => {
        clearInterval(interval)
    }, 23000);

    function showCoin() {
        const audio = new Audio(coinSound);
        audio.volume = 0.2;
        audio.play();
        boxHeader.setAttribute('src', marioCoin);
            setTimeout(() => {
                boxHeader.setAttribute('src', marioBox);
            }, 150);
    };

    function twoFingersAction () {
        clearInterval(interval);
        marioHeader.setAttribute('src', marioTwoFingers);
    }
 
    return (
        <header>
            <h1 id='headerid' >
                <img 
                    src={marioRunning} 
                    alt="Mario Running" 
                    id={styles.marioRunning}
                    ref={marioRef}
                    onClick={twoFingersAction}
                />
                My Nostalgic Games
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