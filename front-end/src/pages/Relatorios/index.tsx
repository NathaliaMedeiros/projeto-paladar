import NavBar from "components/NavBar";

import { useEffect, useState } from "react";

const Relatorios = () => {
	
	const [data, setData] = useState<string>()
	const [entradas, setEntradas] = useState<number>()
	const [despesas, setDespesas] = useState<number>()
	const [diferenca, setDiferenca] = useState<number>()

	const moc = [{ "Data": "14/10/2021", "Entradas": 110.00, "Despesas": 20.00},
	{ "Data": "14/10/2021", "Entradas": 110.00, "Despesas": 20.00} ,
	{ "Data": "14/10/2021", "Entradas": 110.00, "Despesas": 20.00} ,
	{ "Data": "14/10/2021", "Entradas": 110.00, "Despesas": 20.00}  ]


	return (
		<>
			<NavBar />
				<section className="d-flex justify-content-center m-3 "  >
					<table className="table board75 text-center ">
					  <thead className="table-dark">
					    <tr>
						    <th>Data</th>
						    <th>Entradas</th>
						    <th>Despesas</th>
						    <th>Diferença</th>
					  	</tr>
					  </thead>
					  <tbody className="board75">
					    {moc.map(i =>  <tr>
					    	<td className="table-length">{i.Data}</td>
					    	<td className="table-length">{i.Entradas}</td>
					    	<td className="table-length">{i.Despesas}</td>
					    	<td className="table-length">{i.Entradas - i.Despesas}</td>
					    </tr>)}
					  </tbody>
					</table>
				</section>
		</>
	)
}

export default Relatorios
