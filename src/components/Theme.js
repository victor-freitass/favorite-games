import darkTheme from '../images/darkTheme.png';
import lightTheme from '../images/lightTheme.png';
import './Theme.module.css';

function ThemeButton() {
    function ChangeTheme() {

        const imgTheme = document.querySelector('#img-theme');
        const App = document.querySelector('#principal-div');
        const main = document.querySelector('#mainid');
        const header = document.querySelector('#headerid');
        const links = document.getElementsByClassName('link');
        const paragraphs = document.getElementsByClassName('paragraph');

        if (imgTheme.getAttribute('src') === darkTheme) {
            imgTheme.setAttribute('src', lightTheme);
            App.style.backgroundColor = '#6688aa';
            main.style.backgroundColor = '#333344';
            header.style.color = '#333344';

            for (let i = 0; i < links.length; i++) {
                links[i].style.backgroundColor = '#28283b';
            }

        } else {
            imgTheme.setAttribute('src', darkTheme); /*reset javascript css. back to css default */ 
            main.style.backgroundColor = null;
            App.style.backgroundColor = null;
            header.style.color = null;

            for (let i = 0; i < links.length; i++) {
                links[i].style.backgroundColor = null;
            }
        }
    }

    return (
        <button
            onClick={ChangeTheme}
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