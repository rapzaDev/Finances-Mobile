import { RectButtonProps } from 'react-native-gesture-handler';

import { 
    Container,
    Icon,
    Title,
    Button,
} from './styles';

interface TransactionTypeProps extends RectButtonProps {
    title: string;
    type: 'positive' | 'negative';
    isSelected: boolean;
}

const icons = {
    positive: 'arrow-up-circle',
    negative: 'arrow-down-circle',
}

function TransactionType ( { title, type, isSelected, ...rest }:TransactionTypeProps ) {

    return (
        <Container 
            isSelected={isSelected}
            type={type}
        >
            <Button  {...rest} >
                <Icon 
                    name={ icons[type] }
                    type={type}
                />
                <Title>{ title }</Title>
            </Button>
        </Container>
    );
};

export { TransactionType };