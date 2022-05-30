import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./components/useLocalStorage/useLocalStorage";
import Header from "./Pages/Header";
import Body from "./Pages/Body";
import LikedCats from "./Pages/LikedCatsPage";

import "./App.css";

export const StoreContext = React.createContext({});
function App() {
  const [favorited, setFavorited] = useLocalStorage([], 'favorites');

  const addFavoriteCat = (obj) => {
    if (!favorited.find((item) => item.id === obj.id)) {
      setFavorited([...favorited, obj]);
    } else {
     
      setFavorited([...favorited]);
    }
  };
  const removeFavoriteCat = (id) => {
    setFavorited(prev => prev.filter(item => item.id !== id))
  }



  return (
    <div className="App">
      <Header />
      <StoreContext.Provider value={{ favorited, addFavoriteCat, removeFavoriteCat }}>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/favorites" element={<LikedCats />} />
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
