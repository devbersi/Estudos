import { Container } from "./styles"
import { Summary } from '../Summary/index'
import { TransactionTables } from '../TransactionsTables/index'

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransactionTables />
        </Container>
    )
}