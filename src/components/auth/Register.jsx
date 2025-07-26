import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../index.css";
import TopMarkeplace from '../marketplace/TopMarkeplace';

function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');
    const [rolesEnum, setRolesEnum] = useState([]);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const url = 'http://localhost:8084/api/auth/roles';
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get(url);
                console.log('Roles obtenidos:', response.data.roles);
                setRolesEnum(response.data.roles);
            } catch (error) {
                console.error('Error al obtener los roles:', error);
                setError('No se pudieron cargar los roles. Intenta nuevamente más tarde.');
            }
        };

        fetchRoles();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmpassword':
                setConfirmPassword(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'role':
                setRole(value);
                break;
            default:
                break;
        }
    };

    async function Save(e) {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        // Validación de campos vacíos
        if (!name || !username || !password || !confirmpassword || !email || !address || !role) {
            setError('Por favor, completa todos los campos');
            return;
        }

        if (password !== confirmpassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if (!rolesEnum.includes(role)) {
            setError('El rol seleccionado no es válido');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8084/api/auth/register', {
                name,
                username,
                password,
                email,
                address,
                role
            });

            if (response.data.authStatus === 'USER_CREATE_SUCCESSFULLY') {
                setSuccessMessage(response.data.errorMessage);
                setTimeout(() => {
                    window.location = '/login';
                }, 4000);
            } else {
                setError(response.data.errorMessage || 'Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error de registro:', error.response || error);

            if (error.response?.data?.authStatus === 'USER_NOT_CREATED') {
                setError(error.response.data.errorMessage || 'Error en el servidor. Por favor, inténtalo nuevamente.');
            } else {
                setError('Error al registrar, Por favor, inténtalo más tarde.');
            }
        }
    }

    return (
        <div className="cotainer_login">
            <TopMarkeplace />
            <div className="items_container_users-admins">

                <div className="items_container_users_admins-login">
                    <div className="user_formulary">
                        <h4 className="h4">Registro</h4>

                        <form onSubmit={Save}>
                            {error && <p className="error">{error}</p>}
                            {successMessage && <p className="success">{successMessage}</p>}

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="name">Nombre Completo</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="username">Nombre de Usuario</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="password">Contraseña</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    value={confirmpassword}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="confirmpassword">Confirmar Contraseña</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={address}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    className="input"
                                />
                                <label htmlFor="address">Dirección</label>
                            </div>

                            <div className="form-group">
                                <select
                                    id="role"
                                    name="role"
                                    value={role}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                >
                                    <option value="" disabled>Seleccionar...</option>
                                    {rolesEnum.map((roleOption) => (
                                        <option key={roleOption} value={roleOption}>
                                            {roleOption}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="role">Rol</label>
                            </div>

                            <input type="submit" value="Registrar" />
                        </form>
                        <div className="user_formulary_ancla">
                            <ul>
                                <li>
                                    <Link to="/Login">Atrás</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="/Login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;