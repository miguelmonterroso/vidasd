import React from 'react'
import logo from '../../images/logo/web/png/white.png'



export const Header = (props) => {
    return (
        <div className='contHead'>
            <div className="menu">
                <div className="items">
                    <img className='logo' src={logo} alt="" />
                    
                </div>
            </div>
            <div className="info">
                <h2>Bienvenido</h2>
                <h4>Que bueno tenerte por aqui :)</h4>
                <button>Empecemos</button>
            </div>
        </div>
    )
}
