import { BrowserRouter, Route, Routes} from 'react-router';

import About from './Components/About';
import Home from './Components/Home';
import ManufactureProcess from './Components/ManufactureProcess';
import RiceTypes from './Components/RiceTypes';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import LoginForm from './Components/Login';
// import ProtectedRoute from './ProtectedRoute';

const App = () => (                                                                                     
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/login' element={<LoginForm/>}/> */}
        <Route path="/about" element={<About/>}  />
        <Route path="/manufacture-process" element={<ManufactureProcess/>}  /> 
        <Route path="/types-of-rice" element={<RiceTypes/>} />
        <Route path="/contact"  element = {<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);

export default App;