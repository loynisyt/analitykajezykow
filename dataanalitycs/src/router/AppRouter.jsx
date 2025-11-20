import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PythonPage from '../components/Python/PythonPage';
import JavaPage from '../components/Java/JavaPage';
import JavaScriptPage from '../components/JavaScript/JavaScriptPage';
import PhpPage from '../components/PHP/PhpPage';

const AppRouter = () => {
  return (
<Routes>
  <Route path="/" element={<HomePage />} />

  <Route path="/python" element={<PythonPage />} />
  <Route path="/java" element={<JavaPage />} />
  <Route path="/javascript" element={<JavaScriptPage />} />
  <Route path="/php" element={<PhpPage />} />

</Routes>


  );
};

export default AppRouter;
