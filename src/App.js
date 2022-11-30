// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './componentes/AppLayout';
import AppHeader from './componentes/header/AppHeader';
import AppRouters from './componentes/router/AppRouters';

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
