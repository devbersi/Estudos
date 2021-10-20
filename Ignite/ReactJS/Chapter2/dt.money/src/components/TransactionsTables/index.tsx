import { useEffect } from "react"
import { Container } from "./styles"
import { createServer } from 'miragejs'
import api from '../../services/api'

createServer({
    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    createDate: new Date()
                }
            ]
        })
    }
})

export const TransactionTables = () => {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>16/12/2021</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Televisão</td>
                        <td className="withdraw">R$-500,00</td>
                        <td>Lazer</td>
                        <td>10/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}