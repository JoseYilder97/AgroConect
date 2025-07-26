import { FaHome, FaUser } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BoxIcon from "../layout/BoxIcon";

const TopMarkeplace = () => {
    const navigate = useNavigate(); 
    const location = useLocation(); 

    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <Link to={location.pathname === '/Login' ? '/' : '/Login'}>
                    Atrás
                </Link>
                <BoxIcon />
                <div className="user-options">
                    <div className="perfil_usuario">
                        {location.pathname === '/Login' ? (
                            <>
                                <FaHome
                                    className="social-icons"
                                    onClick={() => navigate('/')} 
                                />
                                <Link to="/Register">Registrate</Link>
                            </>
                        ) : location.pathname === '/Register' ? (
                            <>
                                <FaUser
                                    className="social-icons"
                                    onClick={() => navigate('/Login')} 
                                />
                                <FaHome
                                    className="social-icons"
                                    onClick={() => navigate('/')} 
                                />
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMarkeplace;