import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/home';
import Affichearticle from './components/articles';
import Addarticle from './components/creerArticle';
import UpdateArticle from './components/updatearticle';
import Detailsarticle from './components/detailsArticle';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="/" element={<Affichearticle/>}></Route>
              <Route path="/create" element={<Addarticle/>}></Route>
              <Route path="/update/:id" element={<UpdateArticle/>}></Route>
              <Route path="/article/:id" element={<Detailsarticle/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
</div>)
}

export default App;
