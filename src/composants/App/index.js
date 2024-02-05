import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import ListeProduits from '../ListeProduits';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import InfoProduit from '../InfoProduit';
import Panier from '../Panier';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ListeProduits/>}/>
          <Route path="/infos/:id" element={<InfoProduit />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
