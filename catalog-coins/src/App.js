import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage/MainPage'
import CoinPage from './page/CoinPage/CoinPage';
import ListOfTheCoins from './page/ListOfTheCoins/ListOfTheCoins';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/listOfTheCoins" element={<ListOfTheCoins />} />
          <Route path="/coinPage" element={<CoinPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
