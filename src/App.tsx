import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import ContatoPage from './pages/ContatoPage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="sobre" element={<SobrePage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
