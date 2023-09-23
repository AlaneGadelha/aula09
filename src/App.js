import{BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Pokemon from './Pages/Pokemon';
import Home from './Pages/Home';
import Menu from './componentes/Menu';
import Posts from './Pages/Posts';
import Pagina from './Pages/Pagina';


function App() {
  return (
    <>

      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/pokemon' element ={<Pokemon/>}></Route>
          <Route path='/posts' element ={<Posts/>}></Route>
          <Route path='/posts/:id' element ={<Posts/>}></Route>
          <Route path='*' element ={<Pagina/>}></Route>
        </Routes>
      </BrowserRouter>
      
        
    </>
  );
}

export default App;