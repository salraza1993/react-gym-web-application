import Header from './components/Header';
import Home from './View/Home';

import { CardContextProvider } from './contexts/CardContext';


// Css files
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <CardContextProvider>
        <Home />
      </CardContextProvider>
    </>
  );
}

export default App;
