import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Percepcja from '../components/Python/Percepcja';
import Funkcjonalnosc from '../components/Java/Funkcjonalnosc';
import Zrozumialosc from '../components/JavaScript/Zrozumialosc';

const AppRouter = () => {
  return (
<Routes>
  <Route path="/" element={<HomePage />} />

  <Route path="/percepcja" element={<Percepcja/>} />
  <Route path="/funkcjonalnosc" element={<Funkcjonalnosc />} />
  <Route path="/zrozumialosc" element={<Zrozumialosc />} />

</Routes>


  );
};

export default AppRouter;
