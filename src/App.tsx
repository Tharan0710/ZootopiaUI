import './App.css';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import Form from './pages/Form/Form';

function App() {
  const navigation = useNavigate();

  const handleScroll = () => {
    console.log("Scrolling");
  }

  const addAnimals = (): void => {
    navigation('/form');
  }

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Main addAnimals={addAnimals} />} />
          <Route path='/form' element={<Form handleScroll={handleScroll} />} />
        </Routes>
    </div>
  );
}

export default App;
