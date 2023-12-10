import Header from "./components/Header/Header";
import Browse from "./components/Browse/Browse";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/Main/MainPage/MainPage";
import Login from "./components/User/Login";
import { useState } from "react";
import AuthContext from "./contexts/authContext";
import { login } from "./services/userService";
import CreateBook from "./components/Book/CreateBook";

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken')

    return {}
  });


  const loginSubmitHandler = async (values) =>{
    const result = await login(values)

    localStorage.setItem('accessToken', result.accessToken)
    setAuth(result);
    navigate('/')
  }  

  return (
    <AuthContext.Provider value={{loginSubmitHandler, isAuthenticated: !!auth.email}}>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/books" element={<Browse />}/>
        <Route path="/user/login" element={<Login />}/>
        <Route path="/books/create" element={<CreateBook />}/>
      </Routes>

    </AuthContext.Provider>
  );
}

export default App;
