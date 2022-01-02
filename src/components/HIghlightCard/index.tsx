import {
    Container,
    Card,
    CardHeader,
    CardTitle,
    EntryIcon,
    CardContent,
    CardAmount,
    LastTransaction,
} from './styles';

function HighlightCard() {
    
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Entrada</CardTitle>
                    <EntryIcon name="arrow-up-circle"/>
                </CardHeader>
                
                <CardContent>
                    <CardAmount>R$ 17.400,00</CardAmount>
                    <LastTransaction>Última entrada dia 25 de dezembro</LastTransaction>
                </CardContent>
            </Card>
        </Container>
    );
}

export { HighlightCard };