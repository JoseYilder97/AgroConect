import "../../index.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import TopMarkeplace from '../marketplace/TopMarkeplace';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        try {
            const response = await axios.post('http://localhost:8084/api/auth/login', {
                username,
                password,
            });
            if (response.data.authStatus === 'LOGIN_SUCCESS') {
                setSuccessMessage('Inicio de sesión exitosa');
                localStorage.setItem('token', response.data.token);

                login({ username });

                setTimeout(() => {
                    navigate('/Marketplace');
                }, 2000);
            }
        } catch (error) {
            setSuccessMessage('');
            if (error.response?.data?.errorMessage) {
                setError(error.response.data.errorMessage);
            } else {
                setError('Error al iniciar sesión');
            }
            console.error('Error detallado:', error);
        }
    }

    return (
        <div className="cotainer_login">
            <TopMarkeplace />
            <div className="items_container_users-admins">
                <div className="items_container_users_admins-login">
                    <div className="user_formulary">
                        <h4 className="h4">Login</h4>
                        <form onSubmit={handleLogin} className="form">
                            {error && !successMessage && <p className="error">{error}</p>}
                            {successMessage && !error && <p className="success">{successMessage}</p>}

                            <div className="form-group">
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    className="input"
                                    placeholder=" "
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="username">Ingresa tu usuario</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="input"
                                    placeholder=" "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="password">Ingresa tu contraseña</label>
                            </div>

                            <label htmlFor="remember_me" className="remember_me">
                                <span className="material-checkbox">Recordar Contraseña</span>
                                <input
                                    type="checkbox"
                                    id="remember_me"
                                    name="remember_me"
                                    className="checkbox"
                                />
                            </label>
                            <div className="user_formulary_ancla">
                                <ul>
                                    <li>
                                        <Link to="/">Atrás</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <p>¿No tienes cuenta?</p>
                                    <li>
                                        <Link to="/Register" id="btnRegistro">Regístrate</Link>
                                    </li>
                                </ul>
                            </div>
                            <input type="submit" value="Iniciar Sesión" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;