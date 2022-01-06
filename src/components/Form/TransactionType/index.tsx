import { TouchableOpacityProps } from 'react-native';

import { 
    Container,
    Icon,
    Title,
} from './styles';

interface TransactionTypeProps extends TouchableOpacityProps {
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
            {...rest} 
            isSelected={isSelected}
            type={type}
        >
                <Icon 
                    name={ icons[type] }
                    type={type}
                />
                <Title>{ title }</Title>
        </Container>
    );
};

export { TransactionType };