import NavBar from "components/NavBar";
import { useEffect, useState } from "react";

const Comandas = () => {
    const [numComanda, setNumComanda] = useState<number>();
    const [listItens, setListItens] = useState<number[]>([]);
    const [item, setItem] = useState<string>("");
    const [total, setTotal] = useState<number>(0);

    function adicionarItem(item: string) {
        listItens.push(parseFloat(item.replace(/\,/g, '.')));
        setListItens(listItens);
        setItem("");
        setTotal(listItens.reduce((total, currentElement) => total + currentElement))
    }

    function gerarNumComanda() {
        const num = Math.floor(Math.random() * 21);
        setNumComanda(num);
    }

    function limparComanda() {
      setItem("");
      setListItens([]);
      setTotal(0);
    }

    function salvarComanda() {
      limparComanda();
      gerarNumComanda();
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
                        <input type="text" className="form-control" id="number-order" value={numComanda} disabled />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="item-value" className="form-label">Adicionar item</label>
                        <div className="d-flex justify-content-between" >
                            <input type="text" className="form-control me-1" id="item-value" lang="pt" placeholder="R$" value={item} onChange={(e) => setItem(e.target.value)} />
                            <button type="button" className="btn btn-primary" onClick={() => adicionarItem(item)}>Adicionar</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <table className="table">
                            <tbody>
                                {listItens.map((i:number,pos) =>
                                    <tr key={pos + "item"}>
                                        <td>{i.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-4 d-flex justify-content-between form-control bg-form-disabled">
                        <span className="fs-4 text fw-bold">TOTAL</span>
                        <span id="item-value" className="fs-4 text fw-bold">
                            {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger" onClick={() => limparComanda()}>Cancelar</button>
                        <button type="submit" className="btn btn-success" onClick={() =>salvarComanda()}>Salvar</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Comandas;