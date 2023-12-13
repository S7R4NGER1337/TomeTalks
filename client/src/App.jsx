import Header from "./components/Header/Header";
import Browse from "./components/Browse/Browse";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/Main/MainPage/MainPage";
import Login from "./components/User/Login";
import AuthContext from "./contexts/authContext";
import { login, register } from "./services/userService";
import CreateBook from "./components/Book/CreateBook";
import usePersistedState from "./hooks/usePersistedState";
import Register from "./components/User/Register";
import Logout from "./components/User/Logout";
import Details from "./components/Book/Details";

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = usePersistedState('auth', {});


  const loginSubmitHandler = async (values) =>{
    const result = await login(values)

    setAuth(result);
    navigate('/')
  }

  const registerSubmitHandler = async (values) => {
    const result = await register(values)

    setAuth(result);
    navigate('/')
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{loginSubmitHandler, registerSubmitHandler, logoutHandler, isAuthenticated: !!auth.email}}>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/books" element={<Browse />}/>
        <Route path="/user/login" element={<Login />}/>
        <Route path="/user/register" element={<Register />}/>
        <Route path="/user/logout" element={<Logout />}/>
        <Route path="/books/create" element={<CreateBook />}/>
        <Route path="/books/:bookId" element={<Details/>}/>
      </Routes>

    </AuthContext.Provider>
  );
}

export default App;
