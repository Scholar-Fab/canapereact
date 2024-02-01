import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import ListeProduits from '../ListeProduits';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import InfoProduit from '../InfoProduit';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListeProduits/>}/>
          <Route path="/infos/:id" element={<InfoProduit />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
