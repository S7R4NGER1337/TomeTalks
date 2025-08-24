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
import EditBookComponent from "./components/Book/EditBook";
import AuthGuard from "./components/AuthGuard/AuthGuaard";

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = usePersistedState('auth', {});
  const emailRegex = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}$/;

  const loginSubmitHandler = async (values) =>{
    try{
      const result = await login(values)
      setAuth(result);
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const registerSubmitHandler = async (values) => {
    try{
      if(emailRegex.test(values.email)){

        
        const result = await register(values)
        
        setAuth(result);
        
        navigate('/')
      } else {
        alert('Please enter a valid mail.')
      }
    } catch (error) {
      console.log(error.message)

    }
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
        <Route path="/books/:bookId" element={<Details/>}/>

        <Route element={<AuthGuard />}>
          <Route path="/user/logout" element={<Logout />}/>
          <Route path="/books/create" element={<CreateBook />}/>
          <Route path="/books/edit/:bookId" element={<EditBookComponent/>}/>
        </Route>
        
      </Routes>

    </AuthContext.Provider>
  );
}

export default App;
