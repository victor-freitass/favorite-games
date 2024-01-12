import {useRef, useEffect} from 'react';
import darkTheme from '../images/darkTheme.png';
import lightTheme from '../images/lightTheme.png';
import  './Theme.module.css';

function ThemeButton () {

    function changeTheme() {
        const imgTheme = document.querySelector('#img-theme');
        const App = document.querySelector('#principal-div');
        const main = document.querySelector('#mainid');
        const header = document.querySelector('#headerid');
        const links = document.getElementsByClassName('link');
        const paragraphs = document.getElementsByClassName('paragraph');

        if(imgTheme.getAttribute('src') === darkTheme) {
            imgTheme.setAttribute('src', lightTheme);
            App.style.backgroundColor = '#6688aa';
            main.style.backgroundColor = '#333344';
            header.style.color = '#333344';
            console.log(links);
            links.forEach(l => {
                l.style.backgroundColor = '0a0a0e';
            })
            /*0a0a0e*/ 

        } else {
            imgTheme.setAttribute('src', darkTheme);
            /*tem como so voltar como era ao invés de definir tudo novamente?*/ 

        }

        /*faz as cores no config... cores ligh/dark. É um objeto q vai retornar geral... organiza ai
        ao abrir um novo link, tme q verificar se o tema é dark ou n. Bota isso por causa dos p.*/ 

    }

    return (
        <button
            onClick={changeTheme}
        >
            <img
                src={darkTheme}
                id='img-theme'
                alt="Mario moon"
            />
        </button>
    )
}

export default ThemeButton;