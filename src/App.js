//import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
//import Tables from './Components/Tables';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
//import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
    <Routes>
      
        <Route path='/' element={<Main />} />
        

    </Routes>
      
    </div>
  );
}

export default App;
