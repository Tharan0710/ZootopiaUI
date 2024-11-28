import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Form from './pages/Form/Form';

function App() {
  return (
    <div className="App">
      {/* <p> Hello..</p> */}
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
