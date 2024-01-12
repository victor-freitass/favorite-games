import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import style from './LinkToPage.module.css';

import Page from '../../pages/Page';

function LinkToPage ({link, value, paragraph, name}) {

    return (
        <BrowserRouter>
        <Link to={link} className='link' id={style.btn} >{value}</Link>
        <Routes>
            <Route exact path={link} element={<Page paragraph={paragraph} name={name}/>} />
        </Routes>
        </BrowserRouter>
    )    
} 

export default LinkToPage;