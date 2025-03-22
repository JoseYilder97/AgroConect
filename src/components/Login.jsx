import "../index.css";
import { Link } from 'react-router-dom';


function Login() {
return (<div className="items_container_users-admins">
        <div className="items_container_users_admins-login">
            <div className="user_formulary">
                <h4 className="h4">Login</h4>
                <form action="" method="post">
                    <label>
                        <span className="material-icons">
                            Username
                        </span>
                        <input name="email" type="text" required className="input"/>
                    </label>
                    <label>
                        <span className="material-icons">
                            Password
                        </span>
                        <input type="password" id="password" name="password" required className="input"/>
                    </label>
                    <div className="user_formulary_ancla">
                         <ul>
                            <li>
                                <Link to="/">Atrás</Link>
                            </li>
                        </ul><ul>
                            <li>
                                <Link to="/Register" id="btnRegistro">Registrate</Link>
                            </li>
                        </ul>
                       
                    </div>
                        <input type="submit" value="login"/>
                    
                </form>
            </div>
        </div>
        
    </div>)

}
export default Login;
