import React from 'react'
import { Cards } from '../components/cards/Cards'
import { Header } from '../components/header/Header'

export const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <Cards/>
            <div className="aboutUs">
                <h2>SOBRE NOSOTROS</h2>
                <p>
                En Iglesia Biblica Vida somos un grupo de personas que adoramos a Dios. Estamos estudiando juntos la sana doctrina y como llegar a ser verdaderos discipulos poniéndo en practica la Biblia; con amor y humildad queremos demostrar que Cristo es nuestro redentor. Él nos ha dado un regalo muy grande que es la salvación, esa salvación que no merecemos es la que queremos compartir con los que todavia no la reciben. Si ya lo recibieron queremos guiarlos lograr el crecimiento que El desea de cada creyente. 
                </p>
            </div>
        </div>
    )
}
