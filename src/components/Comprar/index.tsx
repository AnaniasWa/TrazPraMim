import { Container, Content, Products, Product } from "./styles"
export default function Comprar(){
    return (
        <Container>
            <Content>
                <input placeholder=" Pesquisar " />
                <select name="region" id="region">
                    <option value="" disabled>Selecione a região</option>
                    <option value="leste">Leste</option>
                    <option value="sudeste">Sudeste</option>
                    <option value="sudoeste">Sudoeste</option>
                    <option value="norte">Norte</option>
                    <option value="nordeste">Nordeste</option>
                    <option value="sul">Sul</option>
                    <option value="centro_oeste">Centro Oeste</option>
                </select>

                <Products>
                    <Product>
                        <div className="apresentation">
                            <h1>Acarajé</h1>
                            <img src="https://th.bing.com/th/id/Rf1219b820054d06e7e5d865ebdf5a0f8?rik=YRO9xexjW5Wn0A&pid=ImgRaw" alt="acarajé" />
                        </div>
                        <div className="details">
                            <p>Esse é o texto do negócio</p>
                            <button>Listar viajantes</button>
                        </div>
                    </Product>

                    <Product>
                        <div className="apresentation">
                            <h1>Chimarrão</h1>
                            <img src="https://th.bing.com/th/id/OIP.zvFE2tBE8FxR6FpsjgXfaAHaE8?pid=ImgDet&rs=1" alt="chimarrao" />
                        </div>
                        <div className="details">
                            <p>Esse é o texto do negócio</p>
                            <button>Listar viajantes</button>
                        </div>
                    </Product>

                    <Product>
                        <div className="apresentation">
                            <h1>Doce de Leite</h1>
                            <img src="https://http2.mlstatic.com/delicia-de-doce-de-leite-mineiro-prainha-D_NQ_NP_356405-MLB25022051270_082016-F.jpg" alt="doce de leite" />
                        </div>
                        <div className="details">
                            <p>Esse é o texto do negócio</p>
                            <button>Listar viajantes</button>
                        </div>
                    </Product>

                    {/* <Product>
                        <h1>Chimarrão</h1>
                    </Product>

                    <Product>
                        <h1>Doce de Leite</h1>
                    </Product> */}
                </Products>

            </Content>
        </Container>
    );
}