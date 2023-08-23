import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import DataProvider from './context/DataProvider';
import { Box} from "@mui/material";
import Signup from './Pages/Register/Signup';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar/>
          <Box  style={{marginTop: 64}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/signup' element={<Signup />} />
            </Routes>
            
          </Box>
        
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;