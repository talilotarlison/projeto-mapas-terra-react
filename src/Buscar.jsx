import Local from './Local'
import dados from './assets/db.json'

function Buscar(props) {

    return (

        <div>
            <dialog className={props.modal} id='buscar_local' >
                <div className='buscar_local-dados'>
                    <h1>Buscar Pontos</h1>
                    <div className='locais'>
                        {dados.map((local, index) => (
                            <Local key={index} cep={local.cep} nome={local.nome}  endereco={local.endereco}/>
                        ))}
                    </div>
                </div>
            </dialog>

        </div >
    );
}

export default Buscar;