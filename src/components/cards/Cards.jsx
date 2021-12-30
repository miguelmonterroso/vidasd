import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export const Cards = () => {
    return (
        <div className='contCards'>
            <div className="card">
                <h2>Ubicacion</h2>
                <FontAwesomeIcon className='icon' icon={faMapMarkedAlt}/>
                <a className='a' href="https://www.google.com/maps/place/900+Paseo+del+Rey,+Chula+Vista,+CA+91910,+EE.+UU./@32.6328643,-117.0286346,16.75z/data=!4m5!3m4!1s0x80d94fb23bf17819:0x193c9dee5a635b1f!8m2!3d32.6324536!4d-117.0274106"><p>Visitanos</p></a>
            </div>
            <div className="card">
                <h2>Telefono</h2>
                <FontAwesomeIcon className='icon' icon={faPhoneAlt}/>
                <a className='a' href="tel:+1(707)6192592742"><p>Llamar</p></a>
              
            </div>
            <div className="card">
                <h2>Servicios Exterior</h2>
                <FontAwesomeIcon className='icon' icon={faCalendar}/>
                <p>
                Domingos:  2 a 3:30 PM <br/>
                Estudio en casa: Miercoles y Martes
                </p>
            </div>
        </div>
    )
}
