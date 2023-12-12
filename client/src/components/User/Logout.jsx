import { useNavigate } from "react-router-dom";
import { logout } from "../../services/userService";
import { useEffect, useContext } from "react";
import AuthContext from "../../contexts/authContext";


export default function Logout(){
    const navigate = useNavigate()
    const {logoutHandler} = useContext(AuthContext)

    useEffect(() => {
        logout()
        .then(() => {
            logoutHandler();
            navigate('/');
        })
        .catch(() => {
            logoutHandler();
            navigate('/')
        });

    navigate('/')
    }, [])

    return null
}