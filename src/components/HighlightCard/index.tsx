import {
    Container,
    CardHeader,
    CardTitle,
    Icon,
    CardContent,
    CardAmount,
    LastTransaction,
} from './styles';

interface HighlightCardProps {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total';
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

function HighlightCard ({ 
    title, 
    amount, 
    lastTransaction,
    type 
} : HighlightCardProps ) {
    
    return (
        <Container type={type} >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <Icon name={ icon[type] } type={type}/>
            </CardHeader>
            
            <CardContent>
                <CardAmount type={type} >{amount}</CardAmount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </CardContent>
        </Container>
    );
}

export { HighlightCard };