import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import './LinkToPage.module.css';

import Page from '../../pages/Page';

function LinkToPage ({link, value, paragraph, name}) {

    return (
        <BrowserRouter>
        <Link to={link} className='link' >{value}</Link>
        <Routes>
            <Route exact path={link} element={<Page paragraph={paragraph} name={name}/>} />
        </Routes>
        </BrowserRouter>
    )    
} 

export default LinkToPage;