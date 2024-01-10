import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import Mario from '../../pages/Mario';
import style from './LinkToPage.module.css';

import Page from '../../pages/Page';

function LinkToPage ({link, value, paragraph, name}) {

    let Component;
    if (link === '/mario') Component = Mario;
    if (link === '/gtav') Component = Mario;
    if (link === '/san') Component = Mario;
    if (link === '/cs') Component = Mario;
    if (link === '/crash') Component = Mario;
    if (link === '/minecraft') Component = Mario;

    return (
        <BrowserRouter>
        <Link to={link} className={style.btn}>{value}</Link>
        <Routes>
            <Route exact path={link} element={<Component/>} />
        </Routes>
        </BrowserRouter>
    )    
} 

export default LinkToPage;