
function Pontos(props) {

    return (

        <div>
            <dialog className={props.modal} open >
                <div className="container_form_sessao">
                    <div className="container_form">
                        <h1>Cadastro ponto</h1>
                        <form className="form" action="#" method="post">
                            <div className="form_grupo">
                                <label for="nome" className="form_label">Nome</label>
                                <input type="text" name="nome" className="form_input" id="nome" placeholder="Nome" required />
                            </div>
                            <div class="form_grupo">
                                <label for="cep" class="form_label">CEP</label>
                                <input type="text" name="cep" className="form_input" id="cep" placeholder="CEP" required />
                            </div>
                            <div class="form_grupo">
                                <label for="endereco" class="form_label">Endereço</label>
                                <input type="text" name="endereco" className="form_input" id="endereco" placeholder="Endereço" required />
                            </div>
                            <button type="submit" id='btn'>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div >
    );
}

export default Pontos;