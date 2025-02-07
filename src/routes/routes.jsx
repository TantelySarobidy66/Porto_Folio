import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../interface/login';

function Rout() {
    return (
        <div>
        <ToastContainer />
          <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default Rout;