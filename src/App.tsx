import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import ContatoPage from './pages/ContatoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="sobre" element={<SobrePage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
