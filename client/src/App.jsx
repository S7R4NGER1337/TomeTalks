import Header from "./components/Header/Header";
import Browse from "./components/Browse/Browse";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage/MainPage";
import Login from "./components/User/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/books" element={<Browse />}/>
        <Route path="/user/login" element={<Login />}/>
      </Routes>

    </>
  );
}

export default App;
