
import './App.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Fooder from './Components/Fooder';
import Topber from './Components/Topber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setting from './Components/Setting';
import Profie from './Components/Profie';
import Dummy from './Components/Dummy';
import Hooks from './Components/Hooks';
import From from './Components/From';


function App() {
  const data = ["name1", "name2", "name3",]
  return (
    <div>
      <BrowserRouter>
        <Topber />
        <Routes>
          <Route path='' element={<Home />}>
            <Route path='Profile' element={<Profie />} />
            <Route path='Setting' element={<Setting />}>
              <Route path='dummy' element={<Dummy />} />

            </Route>



          </Route>



          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/fooder' element={<Fooder />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/from' element={<From />} />



        </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
