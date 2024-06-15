import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Header/Header";
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import About from './About/About';
import ErrorPage from './ErrorPage/ErrorPage';

function MyRouterApp(){
    return(
        <div>     
            <BrowserRouter>
                <Header />            
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MyRouterApp;