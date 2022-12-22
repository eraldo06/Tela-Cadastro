import './cadastrar.css'
function Cadastrar() {


    return (
        <>
            <div className="container1">
                <div className="contactForm1">
                    <h2>Cadastre uma Vaga</h2>
                    <div className="formBox1">
                        <div className="inputBox1">
                            <input type="text" required />
                            <span>Nome da Vaga</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required />
                            <span>Empresa</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required />
                            <span>Localização</span>
                        </div>

                        <div className="inputBox1">
                            <input type="text" required />
                            <span>Requisitos</span>
                        </div>
                        <div className="inputBox1">
                            <input type="text" required />
                            <span>Palavra Chave</span>
                        </div>

                    </div>
                    <div className="inputBox1" >
                        <input type="submit" value="Cadastrar" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cadastrar