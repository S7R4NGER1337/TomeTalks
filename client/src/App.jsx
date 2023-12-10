import Header from "./components/Header/Header";
import Browse from "./components/Browse/Browse";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Main/MainPage/MainPage";
import Login from "./components/User/Login";
import { useState } from "react";
import AuthContext from "./contexts/authContext";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) =>{
    console.log(values);
  }  

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/books" element={<Browse />}/>
        <Route path="/user/login" element={<Login />}/>
      </Routes>

    </AuthContext.Provider>
  );
}

export default App;
