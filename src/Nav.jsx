import { useState } from 'react';
import Home from './Home'
import Pontos from './AddPontos'
import Favoritos from './Favoritos'
import Buscar from './Buscar'

function Nav() {
    const [modalHome, setModalHome] = useState('noModal');
    const [modalMak, setModalMak] = useState('noModal');
    const [modalFavoritos, setModalFavoritos] = useState('noModal')
    const [modalBuscar, setModalBuscar] = useState('noModal')
    return (
        <div>
            <div className='modais'>
                <Home modal={modalHome} />
                <Pontos modal={modalMak} />
                <Favoritos modal={modalFavoritos} />
                <Buscar modal={modalBuscar} />
            </div>
            <div className='nav'>
                <div className='menu'>
                    <button onClick={() => {
                        setModalBuscar('noModal')
                        setModalFavoritos('noModal')
                        setModalMak('noModal')
                        modalHome == 'noModal' ? setModalHome('modal') : setModalHome('noModal')
                    }}>
                        <span className="material-symbols-outlined">
                            home
                        </span>Home</button>
                    <button onClick={() => {
                        setModalBuscar('noModal')
                        setModalHome('noModal')
                        setModalMak('noModal')
                        modalFavoritos == 'noModal' ? setModalFavoritos('modal') : setModalFavoritos('noModal')
                    }}><span className="material-symbols-outlined">
                            favorite
                        </span>Favoritos</button>
                    <button onClick={() => {
                        setModalBuscar('noModal')
                        setModalFavoritos('noModal')
                        setModalHome('noModal')
                        modalMak == 'noModal' ? setModalMak('modal') : setModalMak('noModal')
                    }}><span className="material-symbols-outlined">
                            add_circle
                        </span>Adcionar</button>
                    <button onClick={() => {
                        setModalFavoritos('noModal')
                        setModalHome('noModal')
                        setModalMak('noModal')
                        modalBuscar == 'noModal' ? setModalBuscar('modal') : setModalBuscar('noModal')
                    }}><span className="material-symbols-outlined">
                            density_medium
                        </span>Buscar</button>
                </div>

            </div >
        </div>
    );
}

export default Nav;