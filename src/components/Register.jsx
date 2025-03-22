import { Link } from 'react-router-dom';
import "../index.css";
function Register() {
    return (<div className="items_container_users-admins">
    <div className="items_container_users_admins-login">
        <div className="user_formulary">
        <h4 className="h4">Registro</h4>
            <form action="" method="post">
                <label htmlFor="first_name">
                   
                    <input type="text" id="first_name" name="first_name" required placeholder="Nombre Usuario" className="input"/>
                </label>

                <label htmlFor="email">
                    
                    <input type="email" id="email" name="email" required placeholder="Email" className="input"/>
                </label>

                <label htmlFor="password">
                   
                    <input type="password" id="password" name="password" required placeholder="Contraseña" className="input"/>
                </label>
                <label htmlFor="role">
                    
                    <input list="role" id="role" name="role" placeholder="Seleccionar rol" className="input" required/>
                    <datalist id="role">
                        <option>Seleccionar...</option>      
                    </datalist>
                </label>
                <label htmlFor="phone">
                   
                    <input type="number" id="phone" name="phone" required placeholder="Número Telefono" className="input"/>
                </label>

                <label htmlFor="adress">
                   
                   <input type="text" id="adress" name="adress" required placeholder="Tu Dirección" className="input"/>
               </label>

                <input type="hidden" id="id_rol" name="id_rol"/>
                <div className="login">
                    <input type="submit" value="Registrar"/>
                </div>

                <div className="user_formulary_ancla">
                    <ul>
                        <li>
                            <Link to="/Login" id="btnRegistro">Atrás</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/Login">Inicia Sesion</Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
    
</div>)
    
}
export default Register;