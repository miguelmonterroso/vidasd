import React from 'react'
import logo from '../../images/logo/web/png/white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return (
        <div className='contHead'>
            <div className="menu">
                <div className="items">
                    <img className='logo' src={logo} alt="" />
                    <button><FontAwesomeIcon icon={faBars}/></button>
                </div>
            </div>
            <div className="info">
                <h2>Bienvenido</h2>
                <h4>Dios te bendiga</h4>
                <button>Informacion</button>
            </div>
        </div>
    )
}
