import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

function Register() {
    const [formulario, setFormulario] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        address: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formulario)
            });

            if (response.ok) {
                const data = await response.json();
                alert('Registro exitoso: ' + JSON.stringify(data));
                // Aquí puedes redirigir al login o realizar otra acción
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            alert('Error al conectar con el servidor: ' + error.message);
        }
    };

    return (
        <div className="items_container_users-admins">
            <div className="items_container_users_admins-login">
                <div className="user_formulary">
                    <h4 className="h4">Registro</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <span>Nombre Completo</span>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formulario.name}
                                onChange={handleChange}
                                required
                                placeholder="Nombre Completo"
                                className="input"
                            />
                        </label>
                        <label htmlFor="username">
                            <span>Nombre de Usuario</span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formulario.username}
                                onChange={handleChange}
                                required
                                placeholder="Nombre de Usuario"
                                className="input"
                            />
                        </label>
                        <label htmlFor="password">
                            <span>Contraseña</span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formulario.password}
                                onChange={handleChange}
                                required
                                placeholder="Contraseña"
                                className="input"
                            />
                        </label>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="input"
                            />
                        </label>
                        <label htmlFor="address">
                            <span>Dirección</span>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formulario.address}
                                onChange={handleChange}
                                required
                                placeholder="Dirección"
                                className="input"
                            />
                        </label>
                        <label htmlFor="role">
                            <span>Rol</span>
                            <input
                                list="role"
                                id="role"
                                name="role"
                                value={formulario.role}
                                onChange={handleChange}
                                placeholder="Rol"
                                className="input"
                                required
                            />
                            <datalist id="role">
                                <option>Seleccionar...</option>
                            </datalist>
                        </label>
                        <input type="submit" value="Registrar" />
                    </form>
                    <div className="user_formulary_ancla">
                        <ul>
                            <li>
                                <Link to="/Login">Atrás</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;