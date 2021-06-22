import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions/index'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  //validacion para saber si user tiene elementos
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Media player" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
              (<img src={gravatar(user.email)} alt={user.email} />) :
              (<img src={userIcon} alt="User icon" />)
          }
          <p>Perfil</p>
        </div>
        <ul>


          {hasUser ?
            <li><a href="/">{user.name}</a></li>
            : null
          }

          {
            hasUser ?
              <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
              :
              <li>
                <Link to="/login">
                  Iniciar sesion
                </Link>
              </li>
          }
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

//acciones a enviar a docu
const mapDispatchToProps = {
  logoutRequest,
}

Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool
}

//conectar props, dispach dentro de nuestro componente
export default connect(mapStateToProps, mapDispatchToProps)(Header);
