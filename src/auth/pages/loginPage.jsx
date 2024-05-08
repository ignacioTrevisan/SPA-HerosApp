import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext";

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogin = (name) => {
        const lastPage = localStorage.getItem('lastPage') || '/';
        login(name)

        navigate(lastPage, {
            replace: true
        })
    }
    return (

        <div className='container mt-5'>
            <h1>loginPage</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => onLogin('Nacho')}>
                Logear
            </button>

        </div>

    )
}
