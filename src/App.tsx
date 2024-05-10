import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Produtos from './pages/Produtos/Produtos';
import Categorias from './pages/Categorias/Categorias';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormCategorias from './components/Categorias/FormCategorias/FormCategorias';
import DeletarCategorias from './components/Categorias/DeletarCategorias/DeletarCategorias';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/addCategorias" element={<FormCategorias />} />
              <Route path="/editCategorias/:id" element={<FormCategorias />} />
              <Route path="/deleteCategorias/:id" element={<DeletarCategorias />} />
              <Route path="/produtos" element={<Produtos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;