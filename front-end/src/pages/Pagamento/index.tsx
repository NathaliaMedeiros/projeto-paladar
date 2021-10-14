import NavBar from "components/NavBar";
import { useEffect, useState } from "react";

const Pagamento = () => { 
    const [numComanda, setNumComanda] = useState<number>();
    const [listItens, setListItens] = useState<number[]>([]);
    const [item, setItem] = useState<number>(0);
    const [valorTotal, setValorTotal] = useState<string>("");

    function adicionarItem(item: number) {
        // const moeda = item.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        listItens.push(item)
        setListItens(listItens);
        setItem(0);
        // const listItensNum = listItens.map((i) => Number(i));
        // setTotal(listItens.reduce((total, currentElement) => total+currentElement))
    }

    const mockComandas = [
        {"numComanda": 10, "total": "20,50"}, {"numComanda": 20, "total": "33,10"}, {"numComanda": 30, "total": "12,50"}]


    function buscarComanda(num : number | undefined) {
        const objEncontrado = mockComandas.filter((i) => i.numComanda === num);
        console.log(objEncontrado)
        setValorTotal(objEncontrado[0].total);
    }

    function gerarNumComanda() {
        const num = Math.floor(Math.random() * 21);
        setNumComanda(num);
    }

    useEffect(() => {
        gerarNumComanda();
    }, [])


    return (
        <>
            <NavBar />
             <section className="d-flex justify-content-center mt-4">
                <form className="border border-secondary border-2 rounded p-3">
                    <div className="mb-4">
                        <label htmlFor="number-order" className="form-label">Nº da comanda</label>
                        <div className="d-flex justify-content-between" >
                        <input type="text" className="form-control" id="number-order" value={numComanda} onChange={(e) => setNumComanda(Number(e.target.value))}/>
                         <button type="button" className="btn btn-primary" onClick={() => buscarComanda(numComanda)}>Buscar</button>
                         </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number-order" className="form-label">Valor total da comanda</label>
                        <div className="d-flex justify-content-between" >
                        <input type="text" className="form-control" id="number-order" value={valorTotal} disabled/>
                         </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number-order" className="form-label">Valor do desconto</label>
                        <div className="d-flex justify-content-between" >
                        <input type="text" className="form-control" id="number-order" value={numComanda}/>
                        <button type="button" className="btn btn-primary" onClick={() => adicionarItem(item)}>Aplicar</button>
                         </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number-order" className="form-label">Forma de pagamento</label>
                        <div className="d-flex justify-content-between" >
                       <select className="form-select" aria-label="Default select example">
                            <option selected>Escolha um forma de pagamento</option>
                            <option value="1">Cartão débito</option>
                            <option value="2">Dinheiro</option>
                            <option value="3">Vale Alimentação</option>
                        </select>
                         </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number-order" className="form-label">Valor pago</label>
                        <input type="text" className="form-control" id="number-order" value={numComanda}/>
                    </div>
                    <div className="mb-4">
                        <h4 id="item-value">
                            Restante {valorTotal}
                        </h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                        <button type="submit" className="btn btn-success">Finalizar</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Pagamento;
