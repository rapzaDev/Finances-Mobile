import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    TransactionDate,
} from './styles';

type Category = {
    name: string;
    icon: string;
}

type Data = {
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface TransactionCardProps {
    data: Data;
} 

function TransactionCard ( { data } : TransactionCardProps ) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount>{data.amount}</Amount>
             
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <TransactionDate>{data.date}</TransactionDate>
            </Footer>

        </Container>
    );
}

export { TransactionCard };