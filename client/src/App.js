import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import DataProvider from './context/DataProvider';
import { Box} from "@mui/material";
import Signup from './Pages/Register/Signup';
import Login from './Pages/Login/Login';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Box>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/signup' element={<Signup />} />
              <Route path= '/login' element={<Login />} />
            </Routes>
            
          </Box>
        
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;