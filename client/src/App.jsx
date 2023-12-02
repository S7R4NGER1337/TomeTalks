import Header from "./components/Header/Header";
import Browse from "./components/Browse/Browse";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/books" element={<Browse />}/>
      </Routes>

      <Browse />
    </>
  );
}

export default App;
