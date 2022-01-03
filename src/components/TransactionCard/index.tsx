import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    CategoryDate,
} from './styles';

function TransactionCard () {
    return (
        <Container>
            <Title>Desenvolvimento de site</Title>
            <Amount>+ R$ 12.000,00</Amount>
            
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <CategoryDate>25/12/2021</CategoryDate>
            </Footer>

        </Container>
    );
}

export { TransactionCard };