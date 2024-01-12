import style from './Page.module.css';
import {useRef, useEffect} from 'react';

function Page ({paragraph, name}) { /*Essa é a div que vem*/ 
    const ref = useRef(null);

    let imageElement;
    useEffect(() => {
        imageElement = ref.current;
    }, []); 

    function click () {
        alert('Espero que tenha gostado :)');
    }

    const marioGif_1 = require(`../images/gifs/mario.gif`);
    const marioGif_2 = require('../images/gifs/mario-another.gif');
    const crashGif_1 = require(`../images/gifs/crash_1.gif`);
    const crashGif_2 = require('../images/gifs/crash_2.gif');
    const mineGif_1 = require(`../images/gifs/mine.gif`);
    const mineGif_2 = require('../images/gifs/mine-another.gif');
    const sanGif_1 = require('../images/gifs/san_1.gif');
    const sanGif_2 = require('../images/gifs/san_2.gif');
    const csGif_1 = require('../images/gifs/cs_1.gif');
    const csGif_2 = require('../images/gifs/cs_2.gif');
    const gtaVGif_1 = require('../images/gifs/gta_1.gif');
    const gtaVGif_2 = require('../images/gifs/gta_2.gif');
    const gcGif_1 = require('../images/gifs/gc_1.gif');
    const gcGif_2 = require('../images/gifs/gc_2.gif');
    const tkfGif_1 = require('../images/gifs/tk_1.gif');
    const tkfGif_2 = require('../images/gifs/tk_2.gif');
    const btfGif_1 = require('../images/gifs/btf_2.gif');
    const btfGif_2 = require('../images/gifs/btf_1.gif');

    let gif = [];
    
    if (name === 'mario') gif.push(marioGif_1, marioGif_2);
    if (name === 'crash') gif.push(crashGif_1, crashGif_2);
    if (name === 'mine') gif.push(mineGif_1, mineGif_2);
    if (name === 'san') gif.push(sanGif_1, sanGif_2);
    if (name === 'cs') gif.push(csGif_1, csGif_2);
    if (name === 'gtaV') gif.push(gtaVGif_1, gtaVGif_2);
    if (name === 'gc') gif.push(gcGif_1, gcGif_2);
    if (name === 'tkf') gif.push(tkfGif_1, tkfGif_2);
    if (name === 'btf') gif.push(btfGif_1, btfGif_2);

    function changeGif () {
        imageElement.getAttribute('src') === gif[0] ? 
        imageElement.setAttribute('src', gif[1]) : imageElement.setAttribute('src', gif[0]); 
    }

    return (
        <div className={style.page}>
            <br /><br /><br />

            <p id={style.p} className='paragraph'>
                {paragraph}
            </p>

            <img 
                src={gif[0]} 
                alt={`${name} GIF"`} 
                name='imgs' 
                ref={ref}
                id={style.img}
                onClick={click} 
                onMouseOver={changeGif} 
            />
        </div>
    )

}

export default Page;