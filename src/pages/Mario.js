import style from './Mario.module.css';
import {useRef, useEffect} from 'react';

function Mario () {

    const ref = useRef(null); /*how get element by ref in react*/ 
    
    let imageElement
    useEffect(() => {
        imageElement = ref.current;
    }, []); 

    function click () {
        alert('Espero que tenha gostado');/*volta pro inicio*/ 
        
    }

    const defaultGif = require('../images/gifs/mario.gif');
    const anotherGif = require('../images/gifs/mario-another.gif');

    function changeGif () {
        imageElement.getAttribute('src') === defaultGif ? 
        imageElement.setAttribute('src', anotherGif) : imageElement.setAttribute('src', defaultGif); 
    }

    return (
        <div>
            <br /><br /><br />
            <p id={style.p}>
                Zerei Word, se não me engano, 3 também.
                Viciante, trilha sonora  fantástica, visualmente agradável
            </p>

            <img 
                src={require('../images/gifs/mario.gif')} 
                alt="Mario GIF" 
                name='imgs' 
                ref={ref}
                id={style.img} 
                onClick={click} 
                onMouseOver={changeGif} 
            />
        </div>
    )
}

export default Mario;