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

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardData {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface TransactionCardProps {
    data: TransactionCardData;
} 

function TransactionCard ( { data } : TransactionCardProps ) {
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount type={ data.type }>
                { data.type === 'positive' ? `+ ${data.amount}` : `- ${data.amount}`}
            </Amount>
             
            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <TransactionDate>{data.date}</TransactionDate>
            </Footer>

        </Container>
    );
}

export { TransactionCard };